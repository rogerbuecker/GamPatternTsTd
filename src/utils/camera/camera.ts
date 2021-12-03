import { IAwake, Vector2D, Color } from "@/utils";

export class Camera implements IAwake {
    x: number = Map.TILE_SIZE * Map.GRID_W / 2;
    y: number = Map.TILE_SIZE * Map.GRID_H / 2;
    scaleRatio: number = 0.82;
    static DELTA_MOVE: number = 100;
    static SCALE_FACTOR: number = 0.1;
    scaleCenter = {
        x: -this.x + canvas.getElement().width / 2,
        y: -this.y + canvas.getElement().height / 2
    }
    private dragging: boolean = false;
    private dragStartCoordinates = {x: 0, y: 0};
    private dragDeltaDistances = {x: 0, y: 0};
    
  private _elm: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;

  public get Element(): HTMLCanvasElement {
    return this._elm;
  }

  public get Context(): CanvasRenderingContext2D {
    return this._ctx;
  }

  constructor(public readonly Size: Vector2D) {}

  public Awake(): void {
    const canvas = document.createElement("canvas");
    canvas.setAttribute("width", `${this.Size.x}px`);
    canvas.setAttribute("height", `${this.Size.y}px`);

    document.body.appendChild(canvas);
    this._elm = canvas;

    const ctx = this._elm.getContext("2d");
    if (!ctx) {
      throw new Error("Context identifier is not supported");
    }

    this._ctx = ctx;
  }
}
