package core

type FedoraMessagingError struct {
	IsFedoraMessagingError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFedoraMessagingError(code string, msg string, ctx *Context) *FedoraMessagingError {
	return &FedoraMessagingError{
		IsFedoraMessagingError: true,
		Sdk:              "FedoraMessaging",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FedoraMessagingError) Error() string {
	return e.Msg
}
