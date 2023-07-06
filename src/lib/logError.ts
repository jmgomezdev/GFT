export const logError = (error: Error, info: { componentStack: string }) => {
  // Se puede enviar el error a un servicio de monitoreo
  console.log(error, info);
};
