import React, {useEffect} from 'react';
import { Label, ILabelStyles } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { margin: 15 },
};

type props = {
  overview: any
  nodes: any[]
  getNodes: () => any[],
  getOverview: () => {}
}
export default function Home({overview, nodes, getNodes, getOverview}: props) {

  useEffect(()=>{
    getNodes();
    getOverview()
  },[]);
  return (
    <div data-tid="container">
      <h2>Home</h2>
      <Pivot aria-label="Basic Pivot Example">
        <PivotItem
          headerText="Totals"
          headerButtonProps={{
            'data-order': 1,
            'data-title': 'My Files Title',
          }}
        >
          <Label styles={labelStyles}>Totals</Label>
        </PivotItem>
        <PivotItem headerText="Nodes">
          <Label styles={labelStyles}>Nodes</Label>
        </PivotItem>
      </Pivot>
    </div>
  );
}
