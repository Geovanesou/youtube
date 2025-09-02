import {
  ButtonIcon,
  Container,
  MenuItem,
  Line,
  SubItem
} from "./styles";
import HomeIcon from "../../assets/home_off.png";
import ShortsIcon from "../../assets/bolt_off.png";
import SignIcon from "../../assets/signed_off.png";
import YouIcon from "../../assets/you_off.png";
import HistoryIcon from "../../assets/history_off.png";
import PlIcon from "../../assets/playlist_off.png";
import YvIcon from "../../assets/playcircle_off.png";

const items = [{ name: 'Início', link: '/', icon: HomeIcon },
  { name: 'Shorts', link: '/shorts', icon: ShortsIcon },
  { name: 'Inscrições', link: '/subscriptions', icon: SignIcon },
  { name: 'Você', link: '/you', icon: YouIcon }
];

const youitems = [{ name: 'Histórico', link: '/', icon: HistoryIcon },
  { name: 'Playlists', link: '/playlists', icon: PlIcon },
  { name: 'Seus vídeos', link: '/yourvideos', icon: YvIcon }
];

interface IProps {
  openMenu: boolean;
}

function Menu({ openMenu } : IProps ) {
  return (
    <Container openMenu={openMenu}>
      {items.map((item) => (
        <MenuItem openMenu={openMenu}>
          <ButtonIcon alt="" src={item.icon} />
          <span>{item.name}</span>
        </MenuItem>
      ))}
      <Line openMenu={openMenu}/>
        {youitems.map((youitem) => (
        <SubItem openMenu={openMenu}>
          <ButtonIcon alt="" src={youitem.icon} />
          <span>{youitem.name}</span>
        </SubItem>
      ))}
    </Container>
  );
}

export default Menu;