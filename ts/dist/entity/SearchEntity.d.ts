import { FedoraMessagingEntityBase } from '../FedoraMessagingEntityBase';
import type { FedoraMessagingSDK } from '../FedoraMessagingSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../FedoraMessagingTypes';
declare class SearchEntity extends FedoraMessagingEntityBase<Search> {
    constructor(client: FedoraMessagingSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
