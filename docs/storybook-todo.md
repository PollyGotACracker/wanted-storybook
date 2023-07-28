# Storybook-Todo

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
