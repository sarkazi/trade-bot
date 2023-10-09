import { Text, Button, Flex } from '@mantine/core';
import Link from 'next/link';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Flex justify="space-between" align="center" gap="xs">
        <Link href="/">
          <Flex>
            <Text
              size="xl"
              fw={900}
              className={styles.uppercase}
              variant="gradient"
              gradient={{ from: 'cyan', to: 'grape', deg: 90 }}
            >
              fund
            </Text>
            <Text size="xl" fw={700} className={styles.uppercase}>
              bot
            </Text>
          </Flex>
        </Link>

        <Flex align="center" gap="xs">
          <Button
            variant="gradient"
            gradient={{ from: 'grape', to: 'lime', deg: 90 }}
            onClick={() => router.push('/auth/login')}
          >
            Sign in
          </Button>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
