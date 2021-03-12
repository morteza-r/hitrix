package registry

import (
	"errors"

	"github.com/summer-solutions/orm"

	"github.com/coretrix/hitrix/pkg/helper"
	"github.com/coretrix/hitrix/service"
	"github.com/coretrix/hitrix/service/component/app"
	"github.com/coretrix/hitrix/service/component/config"
	"github.com/coretrix/hitrix/service/component/oss/storage"

	"github.com/sarulabs/di"
)

func OSSGoogle(buckets map[string]uint64) *service.Definition {
	return &service.Definition{
		Name:   service.OSSGoogleService,
		Global: true,
		Build: func(ctn di.Container) (interface{}, error) {
			configService := ctn.Get(service.ConfigService).(*config.Config)
			appService := ctn.Get(service.AppService).(*app.App)

			if !helper.ExistsInDir(".oss.json", configService.GetFolderPath()) {
				return nil, errors.New(configService.GetFolderPath() + "/.oss.json does not exists")
			}

			if len(buckets) == 0 {
				return nil, errors.New("please define buckets")
			}

			ormConfig := ctn.Get(service.ORMConfigService).(orm.ValidatedRegistry)
			entities := ormConfig.GetEntities()
			if _, ok := entities["entity.OSSBucketCounterEntity"]; !ok {
				return nil, errors.New("ServiceDefinitionOrmRegistry should be defined before OSSGoogle")
			}

			return storage.NewGoogleOSS(configService.GetFolderPath()+"/.oss.json", appService.Mode, buckets), nil
		},
	}
}