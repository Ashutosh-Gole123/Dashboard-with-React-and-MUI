import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import React from "react";
import { sector_type, states, year } from "../../data/data";
import { Grid, Paper, Typography, useTheme } from "@mui/material";
export default function SectorWise() {
    const theme = useTheme();
  
    return (
      <>
        {" "}
        <Grid container spacing={2} >
          
          <Grid
            item
            xs={12}
            md={12}
            xl={12}
            sx={{
              height: "80vh",
              marginTop: theme.spacing(2),
  
              bgcolor: "#1A2027",
              "@media (max-width: 600px)": {
                height: "50vh",
              },
              "@media (max-width:1350px)": {
                height: "60vh",
              },
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
              margin={{ top: 20, right: 40, bottom: 150, left: 60 }}
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
              role="application"
              ariaLabel="Nivo bar chart demo"
              barAriaLabel={(e) =>
                e.id + ": " + e.formattedValue + " in state: " + e.indexValue
              }
            />
          </Grid>
         
        </Grid>
      </>
    );
  }