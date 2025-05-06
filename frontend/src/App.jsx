// src/App.jsx
import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
  Panel
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'default',
    data: { label: 'N1' },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    type: 'default',
    data: { label: 'N2' },
    position: { x: 100, y: 100 },
  },
];

const initialEdges = [];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background variant="dots"/>
        <Panel position="top-left">Panel Here</Panel>
      </ReactFlow>
    </div>
  );
}

export default App;
