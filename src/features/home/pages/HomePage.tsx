import { HomeAbout } from '@/features/home/components/HomeAbout';
import { HomeRecruit } from '@/features/home/components/HomeRecruit';
import { HomeHeroBanner } from '@/features/home/components/HomeHeroBanner';
import { HomeHistory } from '@/features/home/components/HomeHistory';
import { HomeMainProjects } from '@/features/home/components/HomeMainProjects';
import { HomeMembers } from '@/features/home/components/HomeMembers';

export const HomePage = () => {
  return (
    <div>
      <HomeHeroBanner />
      <HomeAbout />
      <HomeHistory />
      <HomeMembers />
      <HomeMainProjects />
      <HomeRecruit />
    </div>
  );
};
