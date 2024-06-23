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
                  <TrackCard
                    name="Personal Cathedrals"
                    author="Aly & AJ"
                    duration="3:46"
                  />
                  <TrackCard
                    name="Personal Cathedrals"
                    author="Aly & AJ"
                    duration="3:46"
                  />
                  <TrackCard
                    name="Personal Cathedrals"
                    author="Aly & AJ"
                    duration="3:46"
                  />
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
