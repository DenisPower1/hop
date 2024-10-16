import type { attrsI, htmlEstructureI } from "./types";

export function isACharacter(arg: string): boolean {
    return /^[A-z]|\d$/i.test(arg);
}

export function isASpace(arg: string): boolean {
    return /^\s$/.test(arg);
}

export function mergeAttr(attribute: attrsI<string>, html: htmlEstructureI, attrValue: string): void {

    attribute.value = attrValue

    html.attrs.push(
        Object.assign({}, attribute)
    );

    attribute.name = "";
    attribute.value = "";

}

export function hasProps(obj: Object): boolean {

    return Object.keys(obj).length > 0;

}

export function resetElementProps(element: htmlEstructureI): void {

    element.tag = "";
    element.type = null;
    element.tagStart = 0;
    element.tagEnd = 0;
    element.attrs = [];


}