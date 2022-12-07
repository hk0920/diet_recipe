import 'styled-components';

// https://styled-components.com/docs/api#typescript 사이트 접속 후 styled.d.ts 예시 코드를 오버라이드 후 
// 우리꺼에 맞춰서 수정해줘야한다.


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    textColor : string;
    bgColor : string;
    accentColor : string;
  }
}