
import Scalar     from "./Scalar.jsx";
import Table      from "./Table.jsx";
import LineChart  from "./LineChart.jsx";
import BarChart   from "./BarChart.jsx";
import PieChart   from "./PieChart.jsx";
import AreaChart  from "./AreaChart.jsx";
import USStateMap from "./USStateMap.jsx";
import WorldMap   from "./WorldMap.jsx";
import PinMap     from "./PinMap.jsx";

class MapDefault extends Map {
    constructor(_default, ...args) {
        super(...args);
        this._default = _default;
    }
    get(key) {
        if (this.has(key)) {
            return super.get(key);
        } else {
            return this._default;
        }
    }
}

const visualizations = new MapDefault(Table);

export function registerVisualization(visualization) {
    let identifier = visualization.identifier;
    if (identifier == null) {
        throw new Error("Visualization must define an 'identifier' static variable: " + visualization.name);
    }
    if (visualizations.has(identifier)) {
        throw new Error("Visualization with that identifier is already registered: " + visualization.name);
    }
    visualizations.set(identifier, visualization);
}

registerVisualization(Scalar);
registerVisualization(Table);
registerVisualization(LineChart);
registerVisualization(BarChart);
registerVisualization(PieChart);
registerVisualization(AreaChart);
registerVisualization(USStateMap);
registerVisualization(WorldMap);
registerVisualization(PinMap);

export default visualizations;
