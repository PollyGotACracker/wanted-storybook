# Setup

1. 라이브러리로 (사용될) 저장소 만들기
2. npm 환경 초기화 (npm 등)

```shell
npm init -y
```

3. storybook 설치 (webpack, react)

```shell
npx storybook@latest init
```

4. styled-components 설치

```shell
npm i styled-components@latest
```

5. .stories 폴더 내 불필요한 스토리북 파일 제거
6. 스토리북 디렉토리 경로 수정 후 .storybook/main.js 에서 config 변경
7. bundler 설치 (rollup)

```shell
npm i --global rollup
```

8. 진입점
9. bundler 설치 (esbuild)

```shell
npm i -d esbuild
npm i -d rollup-plugin-esbuild
npm i -d rollup-plugin-peer-deps-external
```

10. peerDeps 설치 및 설정

- pacakge.json

```json
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "styled-components": "6.0.0-rc.3"
  }
```

11. ESM, CJS output 설정 변경

- rollup.config.js

```js
import esbuild from "rollup-plugin-esbuild";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.exports["."].import,
      format: "esm",
    },
    {
      file: pkg.exports["."].require,
      format: "cjs",
    },
  ],
  plugins: [
    esbuild({
      include: /\.jsx?$/,
      minify: process.env.NODE_ENV === "production",
      jsx: "automatic",
    }),
  ],
  external: ["react", "react-dom", "styled-components"],
};
```

- package.json
  - "keywords": ["A", "B", ... ] : npm keywords(hashtag)

```json

	"keywords": [],
  "scripts": {
		"build": "rm -rf dist && rollup -c",
		"storybook": "storybook dev -p 6006",
		"build-storybook": "storybook build",
		"prepack": "pnpm run build"
	},
	"main": "dist/esm/index.js",
	"type": "module",
	"exports": {
		".": {
			"import": "./dist/esm/index.js",
			"require": "./dist/cjs/index.js"
		}
	},
```

12. npm Login 및 npm 패키지명 중복 확인

```shell
npm login
npm info your-package-name
```

13. npm 에 배포

```shell
npm publish
```

14. 배포한 npm 패키지를 설치하여 정상적으로 배포되었는지 확인
15. Github Pages 에 Storybook 배포 (Chromatic 에 배포 권장)

```shell
npm run build-storybook
```
