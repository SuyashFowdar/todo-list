const el = (type, parent, content, attr, cb) => {
  const node = document.createElement(type);
  if (attr) {
    for (let i = 0; i < attr.length; i += 1) {
      node.setAttribute(attr[i][0], attr[i][1]);
    }
  }
  if (content) node.appendChild(document.createTextNode(content));
  document.getElementById(parent).appendChild(node);
  if (cb) {
    cb(node);
  }
};

const nodeEl = (node, content) => {
  const childNode = document.createElement(content[0]);
  if (content[1]) childNode.appendChild(document.createTextNode(content[1]));
  if (content[2]) {
    for (let i = 0; i < content[i][2].length; i += 1) {
      childNode.setAttribute(content[2][i][0], content[2][i][1]);
    }
  }
  node.appendChild(childNode);
};

export { el, nodeEl };
