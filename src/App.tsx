import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  usePlatform,
} from "@vkontakte/vkui";
import TrackCard from "./components/TrackCard/TrackCard";
import "./App.css";
import { tracks } from "./constants";

const App = () => {
  const platform = usePlatform();

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
      >
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader color="secondary">
                <div className="header">
                  <img src="audio.png" height={32} width={32}></img>
                  <h1 className="title">Perfect Audio</h1>
                </div>
              </PanelHeader>
              <Group
                header={
                  <Header className="card-list-title" size="large">
                    Список треков
                  </Header>
                }
              >
                <section className="card-list">
                  {tracks.map((track) => (
                    <TrackCard
                      key={`${track.author}-${track.name}`}
                      name={track.name}
                      author={track.author}
                      duration={track.duration}
                      file={track.file}
                      image={track.image}
                    />
                  ))}
                </section>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
