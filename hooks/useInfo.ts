// 위경도 정보를 여려 컴포넌트에서 재활용하여 관리하는 코드(hook)
import { useCallback } from 'react';
// 함수를 한번만 만들고 재 랜더링이 되더라도 새로 생성안함.
// 성늘 최적화이다 : 그러나 초반에는 적용하지말라 테스트 중에 고여를 해야한다.

// 위경도 정보를 전역 state 로 보관한다.
// SWR을 활용한다.
// SWR을 활용하여 위경도 데이터를 보관하다.
// mutata : SWR에 쓴다(저장)

import { Info } from '@/types/info';
import { mutate } from 'swr';
// swr의 KEY를 문자열 : 문자열의 장소에 전역데이터를 보관한다.
export const INFO_KEY = '/infos';

const useInfo = () => {
  // 초기 위경도 데이터를 전달받아 swr 키 INFOS_KEY에 보관한다.
  //   infos 매개변수는 [위,경],[위,경]
  //   useCallback(함수, []);
  const initializeInfos = useCallback((infos: Info[]) => {
    mutate(INFO_KEY, infos);
  }, []);
  return {
    initializeInfos,
  };
};

export default useInfo;
