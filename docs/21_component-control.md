# 제어 컴포넌트와 비제어 컴포넌트

- [goshacmd.com: Controlled vs Uncontrolled Inputs in React](https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/)

## Controlled Component (제어 컴포넌트)

- Push & Single Source of Truth (진실의 원천)
- React 에 값이 완전히 제어되는 input element 로 매 입력마다 리렌더링이 발생한다.
- state 를 값으로 넘기고 그 state 를 다룰 수 있는 handler(setState)를 콜백으로 넘긴다.
- 사용자가 값을 입력할 때마다 onChange 이벤트 핸들러가 호출되면서 state 값을 변경한다.  
  그리고 변경된 state 값을 input value 에 할당한다.
- 값을 ... 으로 받는다.
- 실시간으로 값이 필요할 때 사용한다.

```jsx
// input의 값은 항상 state 의 값이다.
<input value={value} onChange={handleChange} />
```

## Uncontrolled Component (비제어 컴포넌트)

- Pull & get state
- 전통적인 HTML 처럼 DOM 에 제어되는 input element
- 오직 사용자만 값과 상호작용한다.  
  폼 제출, 버튼 클릭 등 특정 동작이 이루어지는 순간에만 ref 로 값을 얻는다.
- 값을 ... 로 사용한다.
- 제출 시에만 값이 필요할 때 사용한다.

```jsx
<input value={value} ref={inputRef} />
<button type="button" onClick={handleClick}>SUBMIT</button>
```

|             | Controlled (제어)                                                                 | Uncontrolled(비제어)                                            |
| ----------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 지향점      | 값을 Push                                                                         | 값을 Pull                                                       |
| 사용성      | 항상 진실의 원천을 유지                                                           | 값을 담아내는 방법과 값을 가져오는 트리거 포인트 관련 코드 필요 |
| 성능        | 잦은 리렌더링                                                                     | 구현하는 방법에 따라 성능에 이점이 있을 수 있음                 |
| 동적 핸들링 | 상태를 중심으로 개발하기 때문에 상태 변경에 따른 핸들링 용이                      | DOM을 직접 조작하기 때문에 핸들링이 어려움                      |
| 유효성 검사 | 상태 변경 시 UI 자동 업데이트<br />따라서 업데이트 코드를 별도로 작성할 필요 없음 | DOM을 직접 조작하기 때문에 핸들링이 어려움                      |
