package otp

type IOTPSMSGateway interface {
	GetName() string
	GetCode() string
	SendOTP(phone *Phone, code string) (string, string, error)
	Call(phone *Phone, code string, customMessage string) (string, string, error)
	VerifyOTP(phone *Phone, code string) (string, string, bool, bool, error)
}
