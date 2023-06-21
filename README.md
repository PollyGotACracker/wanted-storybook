# Hello Storybook

- 원티드 프론트엔드 챌린지 - Component Driven Development with Storybook
- [storybook: tutorials](https://storybook.js.org/tutorials/)

## setup

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

## to do

1. TypeScript 로 전환

- 배포 전 빌드 과정이 바뀌게 된다.

2. Github Actions / Workflow 작성
   main 배포 시 NPM 및 Release, Storybook Page 배포
   2.1. 자동 배포 트리거 시점 만들기
   2.2. Commit 메시지 보고 SEMVer => NPM Update
   2.3. Commit 메시지 보고 SEMVer => Release 문서 생성
   2.4. Storybook Page 배포

3. 최적화

- CJS, ESM 어떤 빌드 방법을 가질지? 최적화

4. Workflow 만들기

   - git commit => 배포 시점 trigger => NPM Update => Release 문서 생성 => Storybook Page 배포

5. Figma 수정 => JSON 생성 => 디자인 토큰 생성 => Github Action Trigger => 저장소에서 사용 가능

- 디자인 토큰 예시

```json
{
  "colors": {
    "primary": "#0047ab",
    "secondary": "#ffb854",
    "grey10": "#151515",
    "grey20": "#2a2a2a",
    "grey30": "#545454",
    "grey40": "#6a6a6a",
    "grey50": "#7f7f7f",
    "grey60": "#a9a9a9",
    "grey70": "#bebebe",
    "grey80": "#d3d3d3"
  },
  "fonts": {
    "base": "Helvetica",
    "serif": "sans-serif"
  },
  "sizes": {
    "base": "18px",
    "xxs": "6px",
    "xs": "11px",
    "s": "16px",
    "m": "20px",
    "l": "28px",
    "xl": "32px",
    "xxl": "40px"
  },
  "radius": {
    "base": "4px",
    "sm": "2px",
    "lg": "8px"
  }
}
```

6. Storybook 커스텀하기

- [Component Encyclopedia](https://storybook.js.org/showcase)

## others

### storybook 실행

- 기본 port 는 6006 이다.

```shell
npm run storybook
```

### gitignore 파일 생성

- [toptal: gitignore.io](https://www.toptal.com/developers/gitignore)

### package 재배포

- package.json 직접 수정 또는 npm version ... 커맨드 사용

```shell
# major update
npm version major
# minor update
npm version minor
# patch update
npm version patch
```

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Major.Minor.Patch
- commit 메시지가...
  - feat 접두사 => Minor Update
  - fix 접두사 => Patch Update
  - docs 접두사 => Patch Update
