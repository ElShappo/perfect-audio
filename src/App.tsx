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
  Cell,
  CardGrid,
} from "@vkontakte/vkui";
import TrackCard from "./components/TrackCard/TrackCard";

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
                <section
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                  }}
                >
                  <TrackCard
                    name="Brain Damage"
                    author="Pink Floyd"
                    duration="3:46"
                  />
                  <TrackCard
                    name="Brain Damage"
                    author="Pink Floyd"
                    duration="3:46"
                  />
                  <TrackCard
                    name="Brain Damage"
                    author="Pink Floyd"
                    duration="3:46"
                  />
                  <TrackCard
                    name="Brain Damage"
                    author="Pink Floyd"
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
