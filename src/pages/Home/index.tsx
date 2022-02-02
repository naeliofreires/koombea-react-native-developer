import React, {useCallback, useEffect, useRef} from 'react';
import {observer} from 'mobx-react-lite';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from '~/theme';
import {Filter} from '~/pages/Filter';
import {Modal} from '~/components/commons/Modal';
import {Header} from '~/components/commons/Header';
import {BaseButton} from '~/components/commons/BaseButton';
import {UniverseList} from '~/components/pages/Home/UniverseList';
import {ModalRefProps} from '~/components/commons/Modal/types';
import {FightersList} from '~/components/pages/Home/FightersList';

import * as S from './styles';
import {Onboarding} from '~/components/pages/Home/Onboarding';
import {useStore} from '~/store/hooks';
import {GlobalStoreProps, WARNS_TYPES} from '~/store/Global/types';
import {Platform} from 'react-native';

export const Home = observer(() => {
  const palette = useTheme().palette;

  const globalStore = useStore<GlobalStoreProps>('global');

  const filterModalRef = useRef<ModalRefProps>(null);
  const onboardingModalRef = useRef<ModalRefProps>(null);

  const onOpenFilter = useCallback(() => {
    filterModalRef.current?.open();
  }, [filterModalRef]);

  const onCloseFilter = useCallback(() => {
    filterModalRef.current?.close();
  }, [filterModalRef]);

  const onCloseOnboarding = useCallback(() => {
    onboardingModalRef.current?.close();
  }, [onboardingModalRef]);

  useEffect(() => {
    if (
      globalStore?.warns !== undefined &&
      !globalStore?.warns.includes(WARNS_TYPES.ONBOARDING)
    ) {
      onboardingModalRef.current?.open();
    }
  }, [globalStore?.warns]);

  return (
    <S.Container>
      <Header
        title="Fighters"
        justifyContent={'space-between'}
        rightChild={
          <BaseButton onPress={onOpenFilter}>
            <MaterialIcon
              size={26}
              name={'filter-list'}
              color={
                Platform.OS === 'ios'
                  ? palette.secondaryText
                  : palette.primaryText
              }
            />
          </BaseButton>
        }
      />
      <UniverseList />

      <FightersList />

      <Modal ref={onboardingModalRef} animationType={'slide'}>
        <Onboarding onClose={onCloseOnboarding} />
      </Modal>

      <Modal ref={filterModalRef} animationType={'slide'}>
        <Filter onClose={onCloseFilter} />
      </Modal>
    </S.Container>
  );
});
