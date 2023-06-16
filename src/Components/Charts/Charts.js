import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import React from "react";
import { sector_type, states, year } from "../../data/data";
import { Grid, Paper, Typography, useTheme } from "@mui/material";

function Charts() {
  const theme = useTheme();

  return (
    <>
      {" "}
      <Grid container spacing={2} sx={{ marginTop: theme.spacing(13) }}>
        <Grid
          item
          xs={12}
          md={6}
          xl={6}
          sx={{
            height: "80vh",
            marginTop: theme.spacing(2),

            bgcolor: "#1A2027",
          }}
        >
          <Paper
            square
            elevation={0}
            sx={{
              alignItems: "center",
              height: 50,
              textAlign: "center",
              bgcolor: "#1A2027",
            }}
          >
            <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
              State-Wise Graph
            </Typography>
          </Paper>

          <ResponsiveBar
            data={states}
            theme={{
              tooltip: {
                color: "black",
              },
              axis: {
                domain: {
                  line: {
                    stroke: "white",
                  },
                },
                legend: {
                  text: {
                    fill: "white",
                  },
                },
                ticks: {
                  line: {
                    stroke: "white",
                    strokeWidth: 1,
                  },
                  text: {
                    fill: "white",
                  },
                },
              },
              legends: {
                text: {
                  fill: "white",
                },
              },
            }}
            keys={["No_of_reg"]}
            indexBy="state"
            margin={{ top: 50, right: 130, bottom: 100, left: 60 }}
            padding={0.3}
            groupMode="grouped"
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "category10" }}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 10,
              tickPadding: 2,
              tickRotation: -40,
              legend: "States",
              legendPosition: "middle",
              legendOffset: 50,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "No Of Registration",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={(e) =>
              e.id + ": " + e.formattedValue + " in state: " + e.indexValue
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          xl={6}
          sx={{
            height: "80vh",
            marginTop: theme.spacing(2),

            bgcolor: "#1A2027",
          }}
        >
          <Paper
            square
            elevation={0}
            sx={{
              alignItems: "center",
              height: 50,
              textAlign: "center",
              bgcolor: "#1A2027",
            }}
          >
            <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
              Sector-Wise Graph
            </Typography>
          </Paper>

          <ResponsiveBar
            data={sector_type}
            theme={{
              tooltip: {
                color: "black",
              },
              axis: {
                domain: {
                  line: {
                    stroke: "white",
                  },
                },
                legend: {
                  text: {
                    fill: "white",
                  },
                },
                ticks: {
                  line: {
                    stroke: "white",
                    strokeWidth: 1,
                  },
                  text: {
                    fill: "white",
                  },
                },
              },
              legends: {
                text: {
                  fill: "white",
                },
              },
            }}
            keys={["No_of_reg"]}
            indexBy="state"
            margin={{ top: 50, right: 130, bottom: 100, left: 60 }}
            padding={0.3}
            groupMode="grouped"
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "dark2" }}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 10,
              tickPadding: 2,
              tickRotation: -40,
              legend: "Sector",
              legendPosition: "middle",
              legendOffset: 50,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "No Of Registration",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={(e) =>
              e.id + ": " + e.formattedValue + " in state: " + e.indexValue
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          xl={12}
          sx={{
            height: "80vh",
            marginTop: theme.spacing(2),
            padding: theme.spacing(5),
            bgcolor: "#1A2027",
          }}
        >
          <Paper
            square
            elevation={0}
            sx={{
              alignItems: "center",
              height: 50,
              textAlign: "center",
              bgcolor: "#1A2027",
            }}
          >
            <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
              Year-Wise Graph
            </Typography>
          </Paper>

          <ResponsivePie
            data={year}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            theme={{
              tooltip: {
                color: "black",
              },
              axis: {
                domain: {
                  line: {
                    stroke: "white",
                  },
                },
                legend: {
                  text: {
                    fill: "white",
                  },
                },
                ticks: {
                  line: {
                    stroke: "white",
                    strokeWidth: 1,
                  },
                  text: {
                    fill: "white",
                  },
                },
              },
              legends: {
                text: {
                  fill: "white",
                },
              },
            }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={{ scheme: "category10" }}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#fff"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor="black"
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Charts;
