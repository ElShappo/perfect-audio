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
              <PanelHeader color="secondary">VK audio</PanelHeader>
              <Group header={<Header>Список аудио</Header>}>
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
