import Container from '@/components/Container';
import MDXComponents from '@/components/MDXComponents';
import { ReactNode } from 'react';
import { Chess as ChessStats, ChessBlitzClass } from './types';

const Stat = ({ stat, gameType }: { stat: ChessBlitzClass; gameType: string }) => {
  const statDate = (date: number) =>
    new Date(date * 1e3).toLocaleDateString('en-GB', { dateStyle: 'long' });

  const StatSpan = ({ children }: { children: ReactNode }) => (
    <span className='font-bold text-blue-900 dark:text-blue-500'>{children}</span>
  );
  return (
    <div className='my-4 text-lg'>
      My current {gameType} rating is <StatSpan>{stat.last.rating}</StatSpan> as of{' '}
      <StatSpan>{statDate(stat.last.date)}</StatSpan>
      <div>
        My highest {gameType} rating was <StatSpan>{stat.best.rating}</StatSpan>
      </div>
      <div className='flex flex-row gap-2'>
        <div>
          Draws: <StatSpan>{stat.record.draw}</StatSpan>
        </div>
        <div>
          Wins: <StatSpan>{stat.record.win}</StatSpan>
        </div>
        <div>
          Losses: <StatSpan>{stat.record.loss}</StatSpan>
        </div>
      </div>
    </div>
  );
};

const Chess = ({ chessStats }: { chessStats: ChessStats }) => {
  return (
    <>
      <Container>
        <MDXComponents.h1>My Chess Stats</MDXComponents.h1>
        <div className='mt-8'>
          <MDXComponents.h2>Rapid ⏳ </MDXComponents.h2>
          <div className='italic text-gray-500 dark:text-gray-400 tracking-wide'>
            Games over 3 minutes but under 10 minutes.
          </div>
          <Stat stat={chessStats.chess_rapid} gameType='Rapid' />
        </div>
        <div>
          <MDXComponents.h2>Blitz ⚡️</MDXComponents.h2>
          <div className='italic text-gray-500 dark:text-gray-400 tracking-wide'>
            Games 10 minutes and longer.
          </div>
          <Stat stat={chessStats.chess_blitz} gameType='Blitz' />
        </div>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  async function sendApiRequest(url: string) {
    const sendFetch = await fetch(url);
    const response: ChessStats = await sendFetch.json();
    return response;
  }

  //  Fetch stats from the Chess.com api
  async function getChessStats() {
    const stats = await sendApiRequest('https://api.chess.com/pub/player/royalered/stats');
    return stats;
  }

  return {
    props: {
      chessStats: await getChessStats(),
    },
  };
}

export default Chess;
