// lemonade GUI v1.0.0 //
// use it //
const xmlToJsObject = (xmlString) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    const parseNode = (node) => {
        const obj = {};

        if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.hasChildNodes()) {
                for (const childNode of node.childNodes) {
                    const childResult = parseNode(childNode);
                    if (childResult) {
                        if (obj[childNode.nodeName]) {
                            if (!Array.isArray(obj[childNode.nodeName])) {
                                obj[childNode.nodeName] = [obj[childNode.nodeName]];
                            }
                            obj[childNode.nodeName].push(childResult);
                        } else {
                            obj[childNode.nodeName] = childResult;
                        }
                    }
                }
            }
            if (node.attributes.length > 0) {
                obj["@attributes"] = {};
                for (const attr of node.attributes) {
                    obj["@attributes"][attr.name] = attr.value;
                }
            }
        } else if (node.nodeType === Node.TEXT_NODE) {
            return node.nodeValue.trim();
        }

        return Object.keys(obj).length > 0 ? obj : null;
    };

    return parseNode(xmlDoc);
};
const jsObjectToXml = (obj, rootName = "root") => {
    const buildXml = (obj) => {
        let xml = "";

        if (typeof obj === "object") {
            for (const key in obj) {
                if (key === "@attributes") {
                    const attributes = obj[key];
                    for (const attrKey in attributes) {
                        xml += ` ${attrKey}="${attributes[attrKey]}"`;
                    }
                } else {
                    const value = obj[key];
                    if (Array.isArray(value)) {
                        for (const item of value) {
                            xml += `<${key}${buildXml(item)}</${key}>`;
                        }
                    } else if (typeof value === "object") {
                        xml += `<${key}${buildXml(value)}</${key}>`;
                    } else {
                        xml += `<${key}>${value}</${key}>`;
                    }
                }
            }
        } else {
            xml = obj;
        }

        return xml;
    };

    const xmlContent = buildXml(obj);
    const xml = `<${rootName}>${xmlContent}</${rootName}>`;
    return xml;
};

function init(el) {
    switch (check(el)) {
        case 1:
            _lemonade.canvas = true;
            break;
        case 0:
            _lemonade.canvas = false;
            break;
    }

}
