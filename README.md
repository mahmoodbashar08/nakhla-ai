# Config the backend endpoints

you will only need to change the [api.js](/src/constants/api.js) file , with your own server endpoints

1- Home data endpoint (GET REQUEST)</br>
Home data will be fetched for each 5 seconds from the server.

- schema :

```
 {
   "recommended":0 (int),
   "live-co2": 0(int),
   "concentration":0(int)
 }

```

- response example :

  ```

  {"recommended":22949,"live-co2":22765,"concentration":40130,"id":"1"}

  ```

2- Input data form endpoint (POST REQUEST)

- Request body schema :

  ```
  {"inputValue":0 (int)}

  ```

- Request body example :

  ```
  {"inputValue":212}

  ```

- Response schema :

```
 {
  "data" : 0 (int),
 }

```

- response example :

  ```
  {"data":212}

  ```

3- Markers with data (GET REQUEST) </br>

## returns markers position , and their daily week data, and the co2 percent

- schema :

  ```
  {
    data :[
       {
      name : 'example',
      count : 32 ,
      data : {
        dailyChartSeries:[10,20,30,40,50,60,70],
        co2Concentration:70
            }
        } ,
        ...

    ]
  }
  ```

  api response example :

```
{"data":[{"name":"nakhla-1","count":12,"data":{"dailyChartSeries":[10,20,30,40,50,60,70],"co2Concentration":70},"lat":36.3773383013567,"lng":43.16410915286604},{"name":"nakhla-2","count":64,"data":{"dailyChartSeries":[40,20,70,60,40,10,30],"co2Concentration":60},"lat":36.35317367802859,"lng":43.097355072660896},{"name":"nakhla-3","count":23,"data":{"dailyChartSeries":[30,50,70,20,40,10,80],"co2Concentration":50},"lat":36.32472542851645,"lng":43.13226316946006},{"name":"nakhla-4","count":23,"data":{"dailyChartSeries":[90,60,40,20,30,50,70],"co2Concentration":40},"lat":36.35103630937551,"lng":43.063671821363464},{"name":"nakhla-5","count":65,"data":{"dailyChartSeries":[80,70,90,30,40,20,50],"co2Concentration":30},"lat":36.37158550028737,"lng":43.18146113044602},{"name":"nakhla-6","count":41,"data":{"dailyChartSeries":[70,40,80,10,30,50,90],"co2Concentration":20},"lat":36.3911432879625,"lng":43.13144660579224}]}

```
