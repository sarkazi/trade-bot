import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import Header from '../components/main/Header';
import '@mantine/core/styles.css';
import styles from './styles.module.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider defaultColorScheme="dark">
      <div className={styles.wrapper}>
        <Header />
        <Component {...pageProps} />
      </div>
    </MantineProvider>
  );
}
