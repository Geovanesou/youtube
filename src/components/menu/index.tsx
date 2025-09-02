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
import HistoryIcon from "../../assets/clockfive_off.png";
import PlIcon from "../../assets/history_off.png";
import YvIcon from "../../assets/playcircle_off.png";
import { useNavigate } from "react-router-dom";

const items = [
  { name: 'Início', link: '/', icon: HomeIcon },
  { name: 'Shorts', link: '/shorts', icon: ShortsIcon },
  { name: 'Inscrições', link: '/subscriptions', icon: SignIcon },
  { name: 'Você', link: '/you', icon: YouIcon }
];

const youitems = [
  { name: 'Histórico', link: '/history', icon: HistoryIcon },
  { name: 'Playlists', link: '/playlists', icon: PlIcon },
  { name: 'Seus vídeos', link: '/library', icon: YvIcon }
];

interface IProps {
  openMenu: boolean;
}

function Menu({ openMenu }: IProps) {
  const navigate = useNavigate();

    return (
    <Container openMenu={openMenu}>
      {items.map((item) => (
        <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
          <ButtonIcon alt="" src={item.icon} />
          <span>{item.name}</span>
        </MenuItem>
      ))}
      <Line openMenu={openMenu}/>
        {youitems.map((youitem) => (
        <SubItem openMenu={openMenu} onClick={() => navigate(youitem.link)}>
          <ButtonIcon alt="" src={youitem.icon} />
          <span>{youitem.name}</span>
        </SubItem>
      ))}
    </Container>
  );
}

export default Menu;