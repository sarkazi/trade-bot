import { Canvas } from '@react-three/fiber';
import { Flex, Text, Mark, Button } from '@mantine/core';
import AnimatedSphere from '../components/main/AnimatedSphere';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

const MainPage = () => {
  const { push } = useRouter();

  return (
    <main className={styles.main}>
      <Flex direction="column" align="center" justify="center" gap="xs">
        <Text size="xl" fw={500} className={styles.h2}>
          <Mark color="lime">Set up your own config and</Mark>
        </Text>

        <Text size="xl" fw={900} className={styles.h1} tt="uppercase">
          Catch the growth of the stock in real time
        </Text>
      </Flex>
      <Button
        onClick={() => push('/auth/login')}
        variant="outline"
        color="gray"
      >
        to begin
      </Button>

      {/*<Canvas className={styles.canvas}>
          <AnimatedSphere />
        </Canvas>*/}
    </main>
  );
};

export default MainPage;
