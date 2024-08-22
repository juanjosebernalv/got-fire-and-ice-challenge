import { getMemberDetail } from 'app/services/iceandfire';
import './SwornMember.scss';

export const SwornMember = async ({member}: {member:string}) => {
  const swornMemberDetail = await getMemberDetail(member);
  const isAlive = swornMemberDetail?.died.length ? false : true;
  return (
    <div
      className={`member__container--${isAlive ? 'live': 'dead'}`}>
      <h3>Name:  {swornMemberDetail && swornMemberDetail?.name && swornMemberDetail.name}</h3>
      <h5>Status: {isAlive ? `Alive🫀` : `Dead 🪦` }</h5>
      {swornMemberDetail.died && <h1>died {swornMemberDetail.died}</h1>}
    </div>
  );
}
