export const VALIDATION_REGEX = {
    expName:
      /^[a-zA-ZàáäãâåèéêëìíîïòóôöõøùúüÿýñçšžÀÁÄÃÅÈÉÊËÌÍÎÏÒÓÔÖÕØÙÚÜŸÝŽÑŠßÇðŒÆ ,.'-]+$/u,
    expIdentificationNumber: /^[\d]{0,3}\.?[\d]{0,3}\.?[\d]{0,3}$/,
    regArea: /^([0-9]){2,5}$/,
    regTelefono: /^([0-9]){7,10}$/,
    regPatent: /^([a-zA-Z0-9]){6,7}$/,
    regTransactionCode: /^[a-fA-F0-9]*$/,
    regPickerId: /^[0-9]*$/,
    regEmail:/^(?=.*[a-zA-Z])(?=^.{1,64}$)^[a-zA-Z\d](?:(\.|[-_]+)?[a-zA-Z\d])*(?:(\+)[a-zA-Z\d]+)?(?:(\.)[a-zA-Z\d]+)*[\da-zA-Z-_]*@(?:[a-zA-Z\d](?:[a-zA-Z\d]+)?\.)+[a-zA-Z\d](?:[a-zA-Z\d]+){1,}?$/,
    regPassword:/^(?=.*[a-zàáèéìíòóùúñ])(?=.*[A-ZÀÁÈÉÌÍÒÓÙÚÑ])(?=.*\d)[A-Za-z\dàáèéìíòóùúñÀÁÈÉÌÍÒÓÙÚÑ@$¡!%;,*.?#^=&_-]{8,20}$/,
    regPasswordSpecialCharacters:
      /^[0-9A-Za-zdàáèéìíòóùúñÀÁÈÉÌÍÒÓÙÚÑ@$¡!%;,*.?#^=&_-]*$/,
    regMayMin: /^(?=.{1,})(?=.*[a-zdàáèéìíòóùúñ])(?=.*[A-ZÀÁÈÉÌÍÒÓÙÚÑ]).*$/,
    regLetNum: /^(?=.{1,})(?=.*[a-zA-ZdàáèéìíòóùúñÀÁÈÉÌÍÒÓÙÚÑ])(?=.*[0-9]).*$/,
    regNumber:/^[0-9]*$/,
  };

  export const TitleDashboard =["concepto","monto","fecha","tipo","categoria"]