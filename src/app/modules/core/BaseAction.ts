function invoke(callback: () => void): void {
    callback ? callback() : void(0)
}
export abstract class BaseAction<T=never> {

    onFinish: () => void;
    onFailed: () => void;

    protected data: T;
    protected _resolve: () => void;
    protected _reject: () => void;

    abstract async execute(commandData?: T): Promise<any>;

    async run(data?: T): Promise<any> {
        this.data = data;
        await new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
            return this.execute(data)
                .then(() => this.resolve())
                .catch((e) => this.failed(e));
        });
        this.finish();
    }

    protected resolve() {
        invoke(this._resolve);
    }

    protected reject() {
        invoke(this._reject);
    }

    protected finish() {
        invoke(this.onFinish);
    }

    async failed(reason: any): Promise<any> {
        invoke(this.onFailed);
    }

    destroy(): void {
        this.data = null;
        this._resolve = null;
        this._reject = null;
        this.onFinish = null;
        this.onFailed = null;
    }
}
