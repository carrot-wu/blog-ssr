type envMap = 'development' | 'production' | 'local'
interface EnvTypeDetail {
  env: envMap;
  showError: boolean;
}
interface EnvType {
  development: EnvTypeDetail;
  production: EnvTypeDetail;
  local: EnvTypeDetail;
  [props: string]: any;
}

const envDetail: EnvType = {
  development: {
    env: 'development',
    showError: true
  },
  production: {
    env: 'production',
    showError: false
  },
  local: {
    env: 'local',
    showError: true
  }
}
const injectEnv = envDetail[process.env.NODE_ENV || 'development']

export default injectEnv
