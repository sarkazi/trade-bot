import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  Flex,
  PasswordInput,
  TextInput,
  Button,
  Input,
  ActionIcon,
} from '@mantine/core';
import styles from './styles.module.scss';
import InputMask from 'react-input-mask';
import Image from 'next/image';
import clsx from 'clsx';

const LoginPage = () => {
  const loginForm = useForm({
    initialValues: {
      phoneNumber: '',
    },

    validate: {
      phoneNumber: (value) => (!value ? null : 'Empty field'),
    },
  });

  const [mode, setMode] = useState<'others' | 'phoneNumber'>('others');

  return (
    <main className={styles.main}>
      <form
        className={clsx([
          styles.form,
          mode === 'others' ? 'grayBorder' : 'limeBorder',
        ])}
      >
        {mode === 'others' && (
          <>
            <Button type="submit" className={styles.tonConnectBtn}>
              <Flex align="center" gap="xs" className={styles.relative}>
                <img src="/assets/images/login/ton.png" alt="tinkoff-logo" />
                <span> Continue with TON connect</span>
              </Flex>
            </Button>
            <Button type="submit" className={styles.vkBtn}>
              <Flex align="center" gap="xs" className={styles.relative}>
                <img src="/assets/images/login/vk.png" alt="tinkoff-logo" />
                <span> Continue with VK</span>
              </Flex>
            </Button>
            <Button type="submit" className={styles.tinkoffBtn}>
              <Flex align="center" gap="xs" className={styles.relative}>
                <img
                  src="/assets/images/login/tinkoff.png"
                  alt="tinkoff-logo"
                />
                <span>Continue with tinkoff ID</span>
              </Flex>
            </Button>
          </>
        )}
        {mode === 'phoneNumber' && (
          <>
            <Input.Wrapper label="Phone number" className={styles.textInput}>
              <Input
                component={InputMask}
                mask="+7 (999) 999-99-99"
                placeholder="+"
                {...loginForm.getInputProps('phoneNumber')}
              />
            </Input.Wrapper>
            <Button
              variant="gradient"
              gradient={{ from: 'grape', to: 'lime', deg: 90 }}
              type="submit"
              disabled={!loginForm.values.phoneNumber}
            >
              Continue
            </Button>
          </>
        )}

        <span
          onClick={() => setMode(mode === 'others' ? 'phoneNumber' : 'others')}
          className={styles.changeModeBtn}
        >
          {mode === 'others'
            ? 'Continue with phone number'
            : 'Other login options'}
        </span>
      </form>
    </main>
  );
};

export default LoginPage;
