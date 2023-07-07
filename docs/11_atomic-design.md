# Atomic Design

- [react.dev: Thinking in React](https://react.dev/learn/thinking-in-react)
- [atomic design](https://atomicdesign.bradfrost.com/)
- [atomic design: Methodology](https://atomicdesign.bradfrost.com/chapter-2/)
- 인터페이스 디자인 시스템을 만드는 방법론이자 디자인 패턴

## 구성

```
Atom(원자) => Molecule(분자) => Organism(유기체) => Template(템플릿) => Page(페이지)
```

- Atom: 인터페이스를 구성하는 가장 작은 단위
- Molecule: Atom을 조합하여 만든 더 복잡한 컴포넌트
- Organism: Molecule을 조합하여 만든 더 복잡한 컴포넌트
- Template: Organisms, Atom과 Molecule을 조합하여 만든 레이아웃
- Page: 여러 Template과 Organism을 조합하여 만든 페이지

## 장점

- 인터페이스를 구성하는 기본 단위를 명확하게 구분할 수 있다.
- 디자인 시스템을 일관성 있게 유지하여 효율적인 개발이 가능하다.
- 컴포넌트를 재사용할 수 있으며 유지보수가 용이하다.
- 개발을 학습하는 관점에서 좋은 예시가 된다.

## 하지만...

- 아토믹 디자인 패턴이 정답은 아니다.
- React 로 사용자 인터페이스를 빌드하는 방식과 접목해야 한다:
  1. 컴포넌트 단위로 분해
  2. 각 컴포넌트에 대해 서로 다른 상태 정의
  3. 컴포넌트를 서로 조합함으로써 데이터 연결
- 회사에서 추구하는 비즈니스 가치, 도메인 컨텍스트를 고려해야 한다.
- TPO: Time(시간), Project(프로젝트), Occasion(상황)
