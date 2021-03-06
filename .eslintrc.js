module.exports = {
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  extends: ['react-app', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'], //定义文件继承的子规范
  plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
  env: {
    //指定代码的运行环境
    browser: true,
    node: true
  },
  rules: {
    //缩进双空格
    '@typescript-eslint/indent': ['error', 2],
    //接口命名允许以I开头
    '@typescript-eslint/interface-name-prefix': 0,
    // 允许any
    '@typescript-eslint/no-explicit-any': 0,
    // 允许不填写返回函数类型
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // 允许ts-ignore
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': 1,
    //允许不添加分号
    semi: 0,
    // 不检测花括号后是否要换行
    'object-curly-newline': 0,
    // 不强制const
    'prefer-const': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': 1
  },
  settings: {
    //解决路径引用ts文件报错的问题
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
