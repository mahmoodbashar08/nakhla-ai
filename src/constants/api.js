/** @example MarkersEndpoint response */
/**
 * {"data":[{"name":"nakhla-1","data":{"dailyChartSeries":[10,20,30,40,50,60,70],"co2Concentration":70},"lat":36.3773383013567,"lng":43.16410915286604},{"name":"nakhla-2","data":{"dailyChartSeries":[40,20,70,60,40,10,30],"co2Concentration":60},"lat":36.35317367802859,"lng":43.097355072660896},{"name":"nakhla-3","data":{"dailyChartSeries":[30,50,70,20,40,10,80],"co2Concentration":50},"lat":36.32472542851645,"lng":43.13226316946006},{"name":"nakhla-4","data":{"dailyChartSeries":[90,60,40,20,30,50,70],"co2Concentration":40},"lat":36.35103630937551,"lng":43.063671821363464},{"name":"nakhla-5","data":{"dailyChartSeries":[80,70,90,30,40,20,50],"co2Concentration":30},"lat":36.37158550028737,"lng":43.18146113044602},{"name":"nakhla-6","data":{"dailyChartSeries":[70,40,80,10,30,50,90],"co2Concentration":20},"lat":36.3911432879625,"lng":43.13144660579224}]}
 */
export const MarkersEndpoint =
  "https://628ba590667aea3a3e33dac2.mockapi.io/markers";

/** @example HomeEndpoint response */
/**
 * {"recommended":22949,"live-co2":22765,"concentration":40130,"id":"1"}
 * */
export const HomeEndpoint = "https://628ba590667aea3a3e33dac2.mockapi.io/home";

/** @example InputEndpoint response */
/**
 * {"data":32}
 *
 *  data will be send as : inputValue
 *
 * */
export const InputEndpoint =
  "https://628ba590667aea3a3e33dac2.mockapi.io/input";
