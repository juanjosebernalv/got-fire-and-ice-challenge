import Image from "next/image";
import { Houses } from '../components/home/Houses';
import { DragonHeader } from '../components/home/DragonHeader';


export default function Home() {
  return (
    <main>
      <DragonHeader />
    <Houses />
    </main>
  );
}
