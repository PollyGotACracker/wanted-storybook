# Etc

## 구독

- [요즘IT: IT 개발 이야기들](https://yozm.wishket.com/magazine/list/develop/)
- [javascriptweekly.com](https://javascriptweekly.com/): 자바스크립트 관련 포스트 구독

## 서적

- [도서출판 인사이트](https://ebook.insightbook.co.kr/): 전자책 미리보기
- 더글러스 크락포드, 자바스크립트는 왜 그 모양일까?
- 악셀 라우슈마이어, 자바스크립트를 말하다
- 주홍철, <면접을 위한 CS 전공지식 노트>

## 유튜브

- [널널한 개발자](https://www.youtube.com/@nullnull_not_eq_null)
- [얄팍한 코딩사전](https://www.youtube.com/@yalco-coding)
- [ByteByteGo](https://www.youtube.com/@ByteByteGo)

## CORS 와 Preflight Request

- CORS(Cross-Origin Resource Sharing;교차 출처 리소스 공유):
  - 다른 출처(Origin)에 리소스를 요청할 때, HTTP header에 추가 설정을 하여 접근 권한을 부여하고 이를 브라우저에 알려주어 해당 리소스에 접근할 수 있도록 하는 정책
  - Origin 은 url 의 protocol, host, port 로 정의되며, 이 3가지가 동일할 때 같은 Origin 이라고 판단
- Preflight Request:
  - CORS 작동 방식 중 하나
  - 브라우저의 요청이 안전하고 유효한지 확인하기 위해 브라우저가 실제 요청을 보내기 전에 예비 요청(Preflight)을 보내는 것
  - `OPTIONS` 메서드를 사용하여 `Access-Control-Request-*` 형태의 header 전송

## 생성형 AI, LLM

- 생성형 AI(Generative AI):
  - 비정형 딥 러닝 모델을 사용하여 사용자 입력을 기반으로 유사한 특징이 있는 새로운 데이터를 생성하는 인공 지능
- LLM(Large Language Models):
  - 자연어 입력에 대해 인간과 유사한 응답을 생성하기 위함
  - 자기 지도 학습이나 반자기지도학습을 사용하여 레이블링되지 않은 대규모의 텍스트 데이터에서 훈련된 인공 지능 유형

## prop-types vs TypeScript

- prop-types(PropTypes):  
  런타임 때 type 을 검사해 console 에 경고를 띄워주는 라이브러리  
  (development 환경에서만 가능, production 에서는 불가능)
- TypeScript:  
  컴파일 때 type 을 검사하여 IDE 에서 경고를 띄움

## UI Library

- [Radix UI](https://www.radix-ui.com/)
- [Zag.js](https://zagjs.com/)
- [Headless UI](https://headlessui.com/)

## Agile 회고 방법론

- 4L(4Ls), KPT, 5F, PMI

## Node 버전 관리

- volta, fnm, n
