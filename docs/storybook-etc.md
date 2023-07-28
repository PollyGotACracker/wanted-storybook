# Storybook-Etc

## storybook 실행

- 기본 port 는 6006 이다.

```shell
npm run storybook
```

## gitignore 파일 생성

- [toptal: gitignore.io](https://www.toptal.com/developers/gitignore)

## package 재배포

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

## storybook 연동 및 배포

- storybook 과 figma 를 연동할 수 있다.
- chromatic 으로 배포하면 부가 기능도 추가할 수 있다.  
  개인일 경우 무료로 배포 가능하다.
