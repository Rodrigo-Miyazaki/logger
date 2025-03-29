import * as apm from 'elastic-apm-node';

export function setupApm() {
  return apm.start({
    serviceName: process.env.APP_NAME,
    secretToken: process.env.ELASTIC_APM_SECRET_TOKEN || '',
    serverUrl: process.env.ELASTIC_APM_SERVER_URL,
    environment: process.env.NODE_ENV,
    active: process.env.ELASTIC_APM_ACTIVE === 'true',
    captureExceptions: true,
    logLevel: 'info',
  });
}