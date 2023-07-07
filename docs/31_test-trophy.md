# Test Trophy

- [Static vs Unit vs Integration vs E2E Testing for Frontend Apps](https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests)

> 벽에 페인트를 던진다면 결국 벽의 대부분을 칠할 수 있겠지만, 붓을 들고 벽 위로 올라가지 않는다면 절대 모서리를 칠할 수 없다.

- 소프트웨어 테스트를 위한 4계층 모델
- 상황에 따라 올바른 테스트 전략(도구)을 선택해야 한다:
  - 실질적으로 테스트가 어떤 의미를 가지는가?
  - 테스트 비용을 최대한 활용하기 위해 무엇을 최적화할 수 있는가?

## 전통적인 TDD: Test Pyramid

- [bliki: TestPyramid](https://martinfowler.com/bliki/TestPyramid.html)

```
/Slower, High Cost/ UI <-- Service <-- Unit /Faster, Low Cost/
```

## Test Trophy 에서의 테스트 종류

```
End to End <-- Integration <-- Unit < -- Static
```

### End to End Test(E2E;정적 테스트)

- 사용자 입장에서 애플리케이션이 잘 동작하는지 테스트
- 일반적으로 전체 애플리케이션(프론트엔드와 백엔드 전부)을 실행, 테스트는 실제 사용자가 사용하는 것처럼 앱과 상호 작용

### Integration Test (통합 테스트)

- 여러 단위가 통합되어 함께 상호 작용
- 실제 DB, 브라우저 없이 큰 규모의 기능이나 하나의 페이지가 side effect 없이 잘 작동하는지 테스트

### Unit Test (단위 테스트)

- 기능의 개별적인 단위나 하나의 컴포넌트를 테스트
- 값을 넣고 예상한 값이 나오도록 테스트

### Static Test (정적 테스트)

- 코드 작성 레벨에서, 즉 코드를 실행시키지 않은 상태에서 개발자의 실수로 발생하는 에러를 확인
- 구문 오류, 나쁜 코드 스타일, 잘못된 API 사용 등을 Lint

## 올바른 테스트 전략: Redux 예시

- [React+Redux アプリケーション テスト戦略](https://recruit-tech.co.jp/blog/2020/07/15/reactredux_app_test_strategy/)
- 모든 비즈니스 중요 코드들을 Redux 에 넣었다면, Redux 를 5개 단위로 나눠서 테스트할 수 있다.

1. Action Creator Test
2. Reducer Test
3. Selector Test
4. API Test
5. Middleware Test

## 테스트 도구

### Jest

- 거의 모든 기능과 플랫폼을 지원하는 JavaScript Testing Framework

### Vitest

- 빠른 속도를 지향하는 단위 테스트 프레임워크 (Jest API 호환, HMR, TS, JSX, ESM 지원)

### React Testing Library

- BDD 방법론에 어울리며 간결하면서도 꼭 필요한 API 지원
- Jest와 jsdom 기반의 브라우저 DOM Testing

### Enzyme

- React Virtual DOM Testing

### Storybook + Chromatic

- 컴포넌트 주도의 독립적인 개발 환경 제공
- 스냅샷 테스트 지원
- 테스트에 용이한 Addon 지원

### Cypress, Playwright

- E2E or 통합 테스트

### Flow, TypeScript

- 정적 타입 지원
