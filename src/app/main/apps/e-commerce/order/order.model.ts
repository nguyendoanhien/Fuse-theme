import { FuseUtils } from '@fuse/utils';

export class Order
{
    id: string;
    reference: string;
    subtotal: string;
    tax: string;
    discount: string;
    total: string;
    date: string;
    customer: any;
    products: any[];
    status: any[];
    payment: any;
    shippingDetails: any[];

    /**
     * Constructor
     *
     * @param order
     */
    constructor(order?)
    {
        order = order || {};
        this.id = order.id || FuseUtils.generateGUID();
        this.reference = order.reference || FuseUtils.generateGUID();
        this.subtotal = order.subtotal || 0;
        this.tax = order.tax || 0;
        this.discount = order.discount || 0;
        this.total = order.total || 0;
        this.date = order.date || '';
        this.customer = order.customer || {};
        this.products = order.products || [];
        this.status = order.status || [];
        this.payment = order.payment || {};
        this.shippingDetails = order.shippingDetails || [];
    }
}
