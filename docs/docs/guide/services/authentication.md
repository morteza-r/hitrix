# Authentication Service
This service is used to making the life easy by doing the whole authentication life cycle using JWT token.

Register the service into your `main.go` file:
```go
registry.ServiceProviderAuthentication(),
```

Access the service:
```go
service.DI().Authentication()
```

##### Dependencies :
`JWTService`

`PasswordService`

`ClockService`

`GeneratorService`

`SMSService` # optional , when you need to support for otp

`GoogleService` # optional , when you need to support google login

`FacebookService` # optional , when you need to support facebook login

```go
func Authenticate(ormService *beeorm.Engine, uniqueValue string, password string, entity AuthProviderEntity) (accessToken string, refreshToken string, err error) {}
func VerifyAccessToken(ormService *beeorm.Engine, accessToken string, entity beeorm.Entity) error {}
func VerifySocialLogin(source, token string)
func RefreshToken(ormService *beeorm.Engine, refreshToken string) (newAccessToken string, newRefreshToken string, err error) {}
func LogoutCurrentSession(ormService *beeorm.Engine, accessKey string){}
func LogoutAllSessions(ormService *beeorm.Engine, id uint64)
func GenerateAndSendOTP(ormService *beeorm.Engine, mobile string, country string){}
func VerifyOTP(ormService *beeorm.Engine, code string, input *GenerateOTP) error{}
func AuthenticateOTP(ormService *beeorm.Engine, phone string, entity OTPProviderEntity) (accessToken string, refreshToken string, err error){}
```
1. The `Authenticate` function will take an uniqueValue such as Email or Mobile, a plain password, and generates accessToken and refreshToken.
   You will also need to pass your entity as third argument, and it will give you the specific user entity related to provided access token
   The entity should implement the `AuthProviderEntity` interface :
    ```go
       type AuthProviderEntity interface {
        beeorm.Entity
        GetUniqueFieldName() string
        GetPassword() string
       }
    ```
   The example of such entity is as follows:
    ```go
    type UserEntity struct {
	    beeorm.ORM  `orm:"table=users;redisCache;redisSearch=search_pool"`
	    ID       uint64 `orm:"searchable;sortable"`
	    Email    string `orm:"required;unique=Email;searchable"`
	    Password string `orm:"required"`
    }
   
    func (user *UserEntity) GetUniqueFieldName() string {
	    return "Email"
    }
    
    func (user *UserEntity) GetPassword() string {
    return user.Password
    }
    ```
2. The `VerifyAccessToken` will get the AccessToken, process the validation and expiration, and fill the entity param with the authenticated user entity in case of successful authentication.
3. The `RefreshToken` method will generate a new token pair for given user
4. The `LogoutCurrentSession` you can logout the user current session , you need to pass it the `accessKey`  that is the jwt identifier `jti` the exists in both access and refresh token.
5. The `LogoutAllSessions` you can logout the user from all sessions , you need to pass it the `id` (user id).
6. The `GenerateAndSendOTP` only in otp flow, it will generate code and send it to the specified number `Mobile` and also returns `GenerateOTP` inside it we have `Token` that it is the hashed otp credentials that needs to be sent by client when verifying.
    ```go
    type GenerateOTP struct {
    	Mobile         string
    	ExpirationTime time.Time
    	Token          string
    }
    ```
7. The `VerifyOTP` only in otp flow , will compare the `code`(otp code) with the `input`(otp credentials)  provided by client.
8. The `AuthenticateOTP` only in otp flow , will get the `phone` and `entity` that should implement `OTPProviderEntity` and query to find the user and will login the user.careful just call this after you verified the otp code using the previous method `VerifyOTP`
   the response is asa same as the `Authenticate`.
   ```go
   type OTPProviderEntity interface {
	    beeorm.Entity
	    GetPhoneFieldName() string
    }
   ```
9. You need to have a `authentication` key in your config file for this service to work. `secret` key under `authentication` is mandatory but other options are optional:
10. The service can also support `OTP` if you want your service to support otp you should have `support_otp` key set to true under `authentication`
11. The service also needs redis to store its sessions so you need to identify the redis storage name in config , the key is `auth_redis` under `authentication`
```yaml
authentication:
  secret: "a-deep-dark-secret" #mandatory, secret to be used for JWT
  access_token_ttl: 86400 # optional, in seconds, default to 1day
  refresh_token_ttl: 31536000 #optional, in seconds, default to 1year
  auth_redis: default #optional , default is the default redis
  support_otp: true # if you want to support otp flow in your app
  otp_ttl: 120 #optional ,set it when you want to use otp, It is the ttl of otp code , default is 60 seconds
```