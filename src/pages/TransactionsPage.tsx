import { Container } from "../components/atom/Container";
import { Header } from "../components/atom/Header";
import { TransactionsCard } from "../components/molecules/TransactionsCard";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export function TransactionsPage(): JSX.Element {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return <>
    <Header />
    <div style={{ height: "1em" }} />
    {isDesktop
      ? <Container>
        <TransactionsCard isSearch={true} />
      </Container>
      : <TransactionsCard isSearch={true} />
    }
    <div style={{ height: "3em" }} />
  </>;

}