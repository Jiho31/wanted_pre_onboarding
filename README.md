# 원티드 프리온보딩 코스 선발과제

## 🔗 배포 링크 🔗

👉 [바로가기](https://custom-components-jihobok.netlify.app/)

## 구현한 기능

### Tab.js

- 이번 과제를 위해 구현한 모든 컴포넌트를 탭 네비게이션을 통해 하나씩 확인할 수 있게 구현
- App.js에서 각 컴포넌트를 import 해서 배열 형태의 변수 `tabElements`에 객체 형태로 넣는다
- useState로 상태를 관리하며, App.js 파일에서 Tab 컴포넌트로 `tabIndex` 라는 prop을 전달해서 현재 활성화되어 있는 탭과 아닌 탭을 구분하고, 해당 컴포넌트만 화면에 렌더링한다
- SPA에서 라우터를 사용하지 않고 간단하게 네비게이션 기능을 활용할 수 있다

### Modal.js

- 모달을 감싸는 영역, 모달창, 닫기 버튼으로 나눠서 구현
- 웹 페이지 전체 영역을 차지하는 요소와 같은 레이어에 모달 요소를 생성하고 `position: absolute`로 설정하고, `z-index` 속성을 0 보다 큰 값으로 지정해서 모달이 화면 가득 채워지게 만든다
- App.js에서 useReducer, createContext를 이용해서 `modalContext`를 생성해서 모달의 display 속성을 Modal, ModalButton 컴포넌트에서 사용할 수 있게 한다
- 모달창 주변 영역이나 닫기(X) 버튼을 클릭할 경우, `display` 속성을 `flex`와 `none`으로 바꿔가며 모달이 열고 닫히게 만든다
- ModalContainer 컴포넌트의 클릭 이벤트에 대해 `stopPropatation()` 메소드를 사용해서 모달 주변의 영역을 클릭했을 땐 모달창이 닫히고, 모달 컨테이너 내부에는 클릭 이벤트가 발생하지 않게 해서 모달창이 닫히지 않는다

### Tag.js

- input 요소의 onKeyUp 이벤트를 통해 Enter 키가 눌렸을 때 input 값이 공백이 아니면 새로운 태그를 생성한다
- 태그의 갯수가 많아져서 컨테이너의 넓이보다 길어질 때, `flex-wrap: wrap` 속성을 통해 태그 요소가 다음 줄로 넘어가게 만든다
- X 버튼을 클릭하면 태그가 삭제된다

### AutoComplete.js

- 자동 완성될 여러 과일들의 이름이 담긴 영어 단어 배열 `searchData`를 생성한다
- 사용자가 `input`에 입력하는 값을 onChange 이벤트로 감지해서, `searchData` 배열을 `indexOf()` 메소드를 이용해서 입력된 문자와 일치하는 문자를 포함하는 단어들만 필터링해서 새로운 배열을 만든다
- 새로운 배열을 `dropdownData`라는 state에 저장해서 자동완성 검색 목록이 담긴 컨테이너를 렌더링한다
    - 처음에는 자동완성 컨테이너의 display 속성을 block, none으로 바꿔서 input이 focus 되었을 경우에 일치하는 단어가 있으면 자동완성 목록을 보이게 했는데, 동작이 매끄럽지 않아 보여서 transform: scaleY() 속성을 사용하기로 했다
- 자동완성 검색 목록에 있는 단어를 마우스로 클릭하면 `input` 값이 바뀐다

### ClickToEdit.js

- `inputs`라는 객체 형태의 데이터로 여러 개의 input에 대한 상태를 관리한다
- 이름, 나이, MBTI input을 수정하면, onBlur 이벤트를 통해 input이 focus를 잃을 때 변경된 input 값을 화면에 렌더링한다

### Toggle.js

- 토글 버튼을 클릭하는 것에 따라 checkbox type의 `input`이 활성화되게 구현
    - `label` 요소를 생성하고, for 속성으로 `input`의 id 값과 연결시켜서 label을 클릭했을 때 checkbox가 체크되도록 한다
    - `label` 요소에 before 의사 요소를 추가해서 토글 버튼 모양을 만든다 (요소에 장식을 추가할 때 가상 요소인 before/after 를 주로 사용한다)
    - `checked` 상태일 때 `transform: translateX()` 스타일 적용 → 토글 버튼의 원이 왼쪽에서 오른쪽으로 왔다 갔다 하는 것 처럼 보인다

## Error Handling Log

1. AutoComplete.js
    - 문제: 마우스로 자동완성 목록의 단어를 클릭하면 선택한 단어로 input 값이 바뀌게 만들었는데, input이 `blur` 될 때 자동완성 컨테이너가 먼저 사라지기 때문에 클릭 이벤트가 미처 발생하지 못한다
    - 해결: blur 이벤트 핸들러에서 자동완성 컨테이너를 숨기기 전에 `setTimeout`으로 200ms의 시간을 두고 컨테이너가 사라지게 함으로써, 클릭 이벤트가 발생할 시간을 만들어줬다
    - 해결하지 못한 새로운 문제: 자동완성 컨테이너가 사라질 때 잔상이 남는데 UX 면에서 안 좋을 것 같기 때문에 추후에 해결 방법을 찾아봐야 한다
2. AutoComplete.js
    - 문제: input에 focus가 생기면 이전에 사용자가 검색한 적 있는 값들이 자동완성 돼서 드롭다운으로 생긴다.
    - 해결: HTML의 input, form, textarea, select 요소에 `autocomplete` 속성을 지정할 수 있다. 보통 브라우저에서 사용자가 과거에 입력했던 값을 사용해서 자동완성 기능을 제공하는데, `autocomplete=off` 로 설정하면 브라우저가 이 필드에 값을 자동으로 넣는 것을 금지할 수 있다. 이 속성을 통해 내가 원하는 자동완성 기능을 넣을 수도 있다
3. ClickToEdit.js
    - 문제: 여러 input 에 대해 onChange 이벤트를 처리해줘야 하는데 동일한 코드가 반복된다
    - 해결: useState에 객체 형태로 값을 넣어서, onChange 이벤트가 발생한 타겟 input 값만 바꾸고 나머지 state는 객체를 복사해서 값을 저장한다
