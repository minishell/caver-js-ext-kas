/*
 * Anchor API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-anchor/v1/api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-anchor/v1/api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([
            './ApiClient',

            // Anchor
            './anchor/model/AnchorBlockRequest',
            './anchor/model/AnchorBlockStatus',
            './anchor/model/AnchorTransactionDetail',
            './anchor/model/AnchorTransaction',
            './anchor/model/AnchorTransactions',
            './anchor/model/Operator',
            './anchor/model/OperatorSetting',
            './anchor/model/Operators',
            './anchor/api/DataAnchoringTransactionApi',
            './anchor/api/OperatorApi',

            // TH
            './tokenHistory/model/FtContract',
            './tokenHistory/model/FtContractDetail',
            './tokenHistory/model/FtLink',
            './tokenHistory/model/FtTransfer',
            './tokenHistory/model/InvalidQueryParameterValue',
            './tokenHistory/model/TransferItem',
            './tokenHistory/model/KlayTransfer',
            './tokenHistory/model/Nft',
            './tokenHistory/model/NftContract',
            './tokenHistory/model/NftContractDetail',
            './tokenHistory/model/NftOwnershipChange',
            './tokenHistory/model/NftTransfer',
            './tokenHistory/model/PageableFtContractDetails',
            './tokenHistory/model/PageableNftContractDetails',
            './tokenHistory/model/PageableNftOwnershipChanges',
            './tokenHistory/model/PageableNfts',
            './tokenHistory/model/PageableTransfers',
            './tokenHistory/model/Transaction',
            './tokenHistory/model/Transfers',
            './tokenHistory/api/TokenApi',
            './tokenHistory/api/TokenContractApi',
            './tokenHistory/api/TokenHistoryApi',
            './tokenHistory/api/TokenOwnershipApi',

            // Wallet
            './wallet/model/Account',
            './wallet/model/AccountByPubkey',
            './wallet/model/AccountCountByAccountID',
            './wallet/model/AccountCountByKRN',
            './wallet/model/AccountRegistration',
            './wallet/model/AccountStatus',
            './wallet/model/AccountSummary',
            './wallet/model/AccountUpdateTransactionRequest',
            './wallet/model/Accounts',
            './wallet/model/AccountsByPubkey',
            './wallet/model/AnchorTransactionRequest',
            './wallet/model/CallArgument',
            './wallet/model/CancelTransactionRequest',
            './wallet/model/ContractCallData',
            './wallet/model/ContractCallRequest',
            './wallet/model/ContractCallResponse',
            './wallet/model/ContractDeployTransactionRequest',
            './wallet/model/ContractExecutionTransactionRequest',
            './wallet/model/EmptyUpdateKeyType',
            './wallet/model/ErrorResponse',
            './wallet/model/EventLog',
            './wallet/model/FDAccountUpdateTransactionRequest',
            './wallet/model/FDAnchorTransactionRequest',
            './wallet/model/FDCancelTransactionRequest',
            './wallet/model/FDContractDeployTransactionRequest',
            './wallet/model/FDContractExecutionTransactionRequest',
            './wallet/model/FDProcessRLPRequest',
            './wallet/model/FDTransactionResult',
            './wallet/model/FDUserAccountUpdateTransactionRequest',
            './wallet/model/FDUserAnchorTransactionRequest',
            './wallet/model/FDUserCancelTransactionRequest',
            './wallet/model/FDUserContractDeployTransactionRequest',
            './wallet/model/FDUserContractExecutionTransactionRequest',
            './wallet/model/FDUserProcessRLPRequest',
            './wallet/model/FDUserValueTransferTransactionRequest',
            './wallet/model/FDValueTransferTransactionRequest',
            './wallet/model/Failures',
            './wallet/model/FeePayerSignaturesObj',
            './wallet/model/Key',
            './wallet/model/KeyCreationRequest',
            './wallet/model/KeyCreationResponse',
            './wallet/model/KeySignDataRequest',
            './wallet/model/KeySignDataResponse',
            './wallet/model/LegacyTransactionRequest',
            './wallet/model/MultisigAccount',
            './wallet/model/MultisigAccountUpdateRequest',
            './wallet/model/MultisigAddress',
            './wallet/model/MultisigKey',
            './wallet/model/MultisigTransactionStatus',
            './wallet/model/MultisigTransactions',
            './wallet/model/MultisigUpdateKey',
            './wallet/model/MultisigUpdateKeyType',
            './wallet/model/PendedTransaction',
            './wallet/model/ProcessRLPRequest',
            './wallet/model/PubkeyUpdateKeyType',
            './wallet/model/RoleBasedUpdateKeyType',
            './wallet/model/SignPendingTransactionBySigRequest',
            './wallet/model/Signature',
            './wallet/model/StatusResponse',
            './wallet/model/TransactionReceipt',
            './wallet/model/TransactionResult',
            './wallet/model/TxData',
            './wallet/model/ValueTransferTransactionRequest',
            './wallet/api/AccountApi',
            './wallet/api/BasicTransactionApi',
            './wallet/api/FeeDelegatedTransactionPaidByKASApi',
            './wallet/api/FeeDelegatedTransactionPaidByUserApi',
            './wallet/api/KeyApi',
            './wallet/api/MultisigTransactionManagementApi',
            './wallet/api/RegistrationApi',
            './wallet/api/StatisticsApi',
        ], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(
            require('./ApiClient'),

            // Anchor
            require('./anchor/model/AnchorBlockRequest'),
            require('./anchor/model/AnchorBlockStatus'),
            require('./anchor/model/AnchorTransactionDetail'),
            require('./anchor/model/AnchorTransaction'),
            require('./anchor/model/AnchorTransactions'),
            require('./anchor/model/Operator'),
            require('./anchor/model/OperatorSetting'),
            require('./anchor/model/Operators'),
            require('./anchor/api/DataAnchoringTransactionApi'),
            require('./anchor/api/OperatorApi'),

            // TH
            require('./tokenHistory/model/FtContract'),
            require('./tokenHistory/model/FtContractDetail'),
            require('./tokenHistory/model/FtLink'),
            require('./tokenHistory/model/FtTransfer'),
            require('./tokenHistory/model/InvalidQueryParameterValue'),
            require('./tokenHistory/model/TransferItem'),
            require('./tokenHistory/model/KlayTransfer'),
            require('./tokenHistory/model/Nft'),
            require('./tokenHistory/model/NftContract'),
            require('./tokenHistory/model/NftContractDetail'),
            require('./tokenHistory/model/NftOwnershipChange'),
            require('./tokenHistory/model/NftTransfer'),
            require('./tokenHistory/model/PageableFtContractDetails'),
            require('./tokenHistory/model/PageableNftContractDetails'),
            require('./tokenHistory/model/PageableNftOwnershipChanges'),
            require('./tokenHistory/model/PageableNfts'),
            require('./tokenHistory/model/PageableTransfers'),
            require('./tokenHistory/model/Transaction'),
            require('./tokenHistory/model/Transfers'),
            require('./tokenHistory/api/TokenApi'),
            require('./tokenHistory/api/TokenContractApi'),
            require('./tokenHistory/api/TokenHistoryApi'),
            require('./tokenHistory/api/TokenOwnershipApi'),

            // Wallet
            require('./wallet/model/Account'),
            require('./wallet/model/AccountByPubkey'),
            require('./wallet/model/AccountCountByAccountID'),
            require('./wallet/model/AccountCountByKRN'),
            require('./wallet/model/AccountRegistration'),
            require('./wallet/model/AccountStatus'),
            require('./wallet/model/AccountSummary'),
            require('./wallet/model/AccountUpdateTransactionRequest'),
            require('./wallet/model/Accounts'),
            require('./wallet/model/AccountsByPubkey'),
            require('./wallet/model/AnchorTransactionRequest'),
            require('./wallet/model/CancelTransactionRequest'),
            require('./wallet/model/ContractDeployTransactionRequest'),
            require('./wallet/model/ContractExecutionTransactionRequest'),
            require('./wallet/model/EmptyUpdateKeyType'),
            require('./wallet/model/ErrorResponse'),
            require('./wallet/model/FDAccountUpdateTransactionRequest'),
            require('./wallet/model/FDAnchorTransactionRequest'),
            require('./wallet/model/FDCancelTransactionRequest'),
            require('./wallet/model/FDContractDeployTransactionRequest'),
            require('./wallet/model/FDContractExecutionTransactionRequest'),
            require('./wallet/model/FDProcessRLPRequest'),
            require('./wallet/model/FDTransactionResult'),
            require('./wallet/model/FDUserAccountUpdateTransactionRequest'),
            require('./wallet/model/FDUserAnchorTransactionRequest'),
            require('./wallet/model/FDUserCancelTransactionRequest'),
            require('./wallet/model/FDUserContractDeployTransactionRequest'),
            require('./wallet/model/FDUserContractExecutionTransactionRequest'),
            require('./wallet/model/FDUserProcessRLPRequest'),
            require('./wallet/model/FDUserValueTransferTransactionRequest'),
            require('./wallet/model/FDValueTransferTransactionRequest'),
            require('./wallet/model/Failures'),
            require('./wallet/model/FeePayerSignaturesObj'),
            require('./wallet/model/Key'),
            require('./wallet/model/KeyCreationRequest'),
            require('./wallet/model/KeyCreationResponse'),
            require('./wallet/model/KeySignDataRequest'),
            require('./wallet/model/KeySignDataResponse'),
            require('./wallet/model/LegacyTransactionRequest'),
            require('./wallet/model/MultisigAccount'),
            require('./wallet/model/MultisigAccountUpdateRequest'),
            require('./wallet/model/MultisigAddress'),
            require('./wallet/model/MultisigKey'),
            require('./wallet/model/MultisigTransactionStatus'),
            require('./wallet/model/MultisigTransactions'),
            require('./wallet/model/MultisigUpdateKey'),
            require('./wallet/model/MultisigUpdateKeyType'),
            require('./wallet/model/PendedTransaction'),
            require('./wallet/model/ProcessRLPRequest'),
            require('./wallet/model/PubkeyUpdateKeyType'),
            require('./wallet/model/RoleBasedUpdateKeyType'),
            require('./wallet/model/SignPendingTransactionBySigRequest'),
            require('./wallet/model/Signature'),
            require('./wallet/model/StatusResponse'),
            require('./wallet/model/TransactionReceipt'),
            require('./wallet/model/TransactionResult'),
            require('./wallet/model/TxData'),
            require('./wallet/model/ValueTransferTransactionRequest'),
            require('./wallet/api/AccountApi'),
            require('./wallet/api/BasicTransactionApi'),
            require('./wallet/api/FeeDelegatedTransactionPaidByKASApi'),
            require('./wallet/api/FeeDelegatedTransactionPaidByUserApi'),
            require('./wallet/api/KeyApi'),
            require('./wallet/api/MultisigTransactionManagementApi'),
            require('./wallet/api/RegistrationApi'),
            require('./wallet/api/StatisticsApi')
        )
    }
})(function(
    ApiClient,

    // Anchor
    AnchorBlockRequest,
    AnchorBlockStatus,
    AnchorTransactionDetail,
    AnchorTransaction,
    AnchorTransactions,
    Operator,
    OperatorSetting,
    Operators,
    DataAnchoringTransactionApi,
    OperatorApi,

    // TH
    FtContract,
    FtContractDetail,
    FtLink,
    FtTransfer,
    InvalidQueryParameterValue,
    TransferItem,
    KlayTransfer,
    Nft,
    NftContract,
    NftContractDetail,
    NftOwnershipChange,
    NftTransfer,
    PageableFtContractDetails,
    PageableNftContractDetails,
    PageableNftOwnershipChanges,
    PageableNfts,
    PageableTransfers,
    Transaction,
    Transfers,
    TokenApi,
    TokenContractApi,
    TokenHistoryApi,
    TokenOwnershipApi,

    // Wallet
    Account,
    AccountByPubkey,
    AccountCountByAccountID,
    AccountCountByKRN,
    AccountRegistration,
    AccountStatus,
    AccountSummary,
    AccountUpdateTransactionRequest,
    Accounts,
    AccountsByPubkey,
    AnchorTransactionRequest,
    CancelTransactionRequest,
    ContractDeployTransactionRequest,
    ContractExecutionTransactionRequest,
    EmptyUpdateKeyType,
    ErrorResponse,
    FDAccountUpdateTransactionRequest,
    FDAnchorTransactionRequest,
    FDCancelTransactionRequest,
    FDContractDeployTransactionRequest,
    FDContractExecutionTransactionRequest,
    FDProcessRLPRequest,
    FDTransactionResult,
    FDUserAccountUpdateTransactionRequest,
    FDUserAnchorTransactionRequest,
    FDUserCancelTransactionRequest,
    FDUserContractDeployTransactionRequest,
    FDUserContractExecutionTransactionRequest,
    FDUserProcessRLPRequest,
    FDUserValueTransferTransactionRequest,
    FDValueTransferTransactionRequest,
    Failures,
    FeePayerSignaturesObj,
    Key,
    KeyCreationRequest,
    KeyCreationResponse,
    KeySignDataRequest,
    KeySignDataResponse,
    LegacyTransactionRequest,
    MultisigAccount,
    MultisigAccountUpdateRequest,
    MultisigAddress,
    MultisigKey,
    MultisigTransactionStatus,
    MultisigTransactions,
    MultisigUpdateKey,
    MultisigUpdateKeyType,
    PendedTransaction,
    ProcessRLPRequest,
    PubkeyUpdateKeyType,
    RoleBasedUpdateKeyType,
    SignPendingTransactionBySigRequest,
    Signature,
    StatusResponse,
    TransactionReceipt,
    TransactionResult,
    TxData,
    ValueTransferTransactionRequest,
    AccountApi,
    BasicTransactionApi,
    FeeDelegatedTransactionPaidByKASApi,
    FeeDelegatedTransactionPaidByUserApi,
    KeyApi,
    MultisigTransactionManagementApi,
    RegistrationApi,
    StatisticsApi
) {
    /**
     * @module RestClient
     * @version 1.0
     */
    const exports = {
        /**
         * The ApiClient constructor.
         * @property {ApiClient}
         */
        ApiClient: ApiClient,

        // Anchor
        /**
         * The AnchorBlockRequest model constructor.
         * @property {AnchorBlockRequest}
         */
        AnchorBlockRequest: AnchorBlockRequest,
        /**
         * The AnchorBlockStatus model constructor.
         * @property {AnchorBlockStatus}
         */
        AnchorBlockStatus: AnchorBlockStatus,
        /**
         * The AnchorTransactionDetail model constructor.
         * @property {AnchorTransactionDetail}
         */
        AnchorTransactionDetail: AnchorTransactionDetail,
        /**
         * The AnchorTransaction model constructor.
         * @property {AnchorTransaction}
         */
        AnchorTransaction: AnchorTransaction,
        /**
         * The AnchorTransactions model constructor.
         * @property {AnchorTransactions}
         */
        AnchorTransactions: AnchorTransactions,
        /**
         * The Operator model constructor.
         * @property {Operator}
         */
        Operator: Operator,
        /**
         * The OperatorSetting model constructor.
         * @property {OperatorSetting}
         */
        OperatorSetting: OperatorSetting,
        /**
         * The Operators model constructor.
         * @property {Operators}
         */
        Operators: Operators,
        /**
         * The DataAnchoringTransactionApi service constructor.
         * @property {DataAnchoringTransactionApi}
         */
        DataAnchoringTransactionApi: DataAnchoringTransactionApi,
        /**
         * The OperatorApi service constructor.
         * @property {OperatorApi}
         */
        OperatorApi: OperatorApi,

        // TokenHistory
        /**
         * The FtContract model constructor.
         * @property {FtContract}
         */
        FtContract: FtContract,
        /**
         * The FtContractDetail model constructor.
         * @property {FtContractDetail}
         */
        FtContractDetail: FtContractDetail,
        /**
         * The FtLink model constructor.
         * @property {FtLink}
         */
        FtLink: FtLink,
        /**
         * The FtTransfer model constructor.
         * @property {FtTransfer}
         */
        FtTransfer: FtTransfer,
        /**
         * The InvalidQueryParameterValue model constructor.
         * @property {InvalidQueryParameterValue}
         */
        InvalidQueryParameterValue: InvalidQueryParameterValue,
        /**
         * The TransferItem model constructor.
         * @property {TransferItem}
         */
        TransferItem: TransferItem,
        /**
         * The KlayTransfer model constructor.
         * @property {KlayTransfer}
         */
        KlayTransfer: KlayTransfer,
        /**
         * The Nft model constructor.
         * @property {Nft}
         */
        Nft: Nft,
        /**
         * The NftContract model constructor.
         * @property {NftContract}
         */
        NftContract: NftContract,
        /**
         * The NftContractDetail model constructor.
         * @property {NftContractDetail}
         */
        NftContractDetail: NftContractDetail,
        /**
         * The NftOwnershipChange model constructor.
         * @property {NftOwnershipChange}
         */
        NftOwnershipChange: NftOwnershipChange,
        /**
         * The NftTransfer model constructor.
         * @property {NftTransfer}
         */
        NftTransfer: NftTransfer,
        /**
         * The PageableFtContractDetails model constructor.
         * @property {PageableFtContractDetails}
         */
        PageableFtContractDetails: PageableFtContractDetails,
        /**
         * The PageableNftContractDetails model constructor.
         * @property {PageableNftContractDetails}
         */
        PageableNftContractDetails: PageableNftContractDetails,
        /**
         * The PageableNftOwnershipChanges model constructor.
         * @property {PageableNftOwnershipChanges}
         */
        PageableNftOwnershipChanges: PageableNftOwnershipChanges,
        /**
         * The PageableNfts model constructor.
         * @property {PageableNfts}
         */
        PageableNfts: PageableNfts,
        /**
         * The PageableTransfers model constructor.
         * @property {PageableTransfers}
         */
        PageableTransfers: PageableTransfers,
        /**
         * The Transaction model constructor.
         * @property {Transaction}
         */
        Transaction: Transaction,
        /**
         * The Transfers model constructor.
         * @property {Transfers}
         */
        Transfers: Transfers,
        /**
         * The TokenApi service constructor.
         * @property {TokenApi}
         */
        TokenApi: TokenApi,
        /**
         * The TokenContractApi service constructor.
         * @property {TokenContractApi}
         */
        TokenContractApi: TokenContractApi,
        /**
         * The TokenHistoryApi service constructor.
         * @property {TokenHistoryApi}
         */
        TokenHistoryApi: TokenHistoryApi,
        /**
         * The TokenOwnershipApi service constructor.
         * @property {TokenOwnershipApi}
         */
        TokenOwnershipApi: TokenOwnershipApi,

        // Wallet

        /**
         * The Account model constructor.
         * @property {Account}
         */
        Account: Account,
        /**
         * The AccountByPubkey model constructor.
         * @property {AccountByPubkey}
         */
        AccountByPubkey: AccountByPubkey,
        /**
         * The AccountCountByAccountID model constructor.
         * @property {AccountCountByAccountID}
         */
        AccountCountByAccountID: AccountCountByAccountID,
        /**
         * The AccountCountByKRN model constructor.
         * @property {AccountCountByKRN}
         */
        AccountCountByKRN: AccountCountByKRN,
        /**
         * The AccountRegistration model constructor.
         * @property {AccountRegistration}
         */
        AccountRegistration: AccountRegistration,
        /**
         * The AccountStatus model constructor.
         * @property {AccountStatus}
         */
        AccountStatus: AccountStatus,
        /**
         * The AccountSummary model constructor.
         * @property {AccountSummary}
         */
        AccountSummary: AccountSummary,
        /**
         * The AccountUpdateTransactionRequest model constructor.
         * @property {AccountUpdateTransactionRequest}
         */
        AccountUpdateTransactionRequest: AccountUpdateTransactionRequest,
        /**
         * The Accounts model constructor.
         * @property {Accounts}
         */
        Accounts: Accounts,
        /**
         * The AccountsByPubkey model constructor.
         * @property {AccountsByPubkey}
         */
        AccountsByPubkey: AccountsByPubkey,
        /**
         * The AnchorTransactionRequest model constructor.
         * @property {AnchorTransactionRequest}
         */
        AnchorTransactionRequest: AnchorTransactionRequest,
        /**
         * The CancelTransactionRequest model constructor.
         * @property {CancelTransactionRequest}
         */
        CancelTransactionRequest: CancelTransactionRequest,
        /**
         * The ContractDeployTransactionRequest model constructor.
         * @property {ContractDeployTransactionRequest}
         */
        ContractDeployTransactionRequest: ContractDeployTransactionRequest,
        /**
         * The ContractExecutionTransactionRequest model constructor.
         * @property {ContractExecutionTransactionRequest}
         */
        ContractExecutionTransactionRequest: ContractExecutionTransactionRequest,
        /**
         * The EmptyUpdateKeyType model constructor.
         * @property {EmptyUpdateKeyType}
         */
        EmptyUpdateKeyType: EmptyUpdateKeyType,
        /**
         * The ErrorResponse model constructor.
         * @property {ErrorResponse}
         */
        ErrorResponse: ErrorResponse,
        /**
         * The EventLog model constructor.
         * @property {EventLog}
         */
        EventLog: EventLog,
        /**
         * The FDAccountUpdateTransactionRequest model constructor.
         * @property {FDAccountUpdateTransactionRequest}
         */
        FDAccountUpdateTransactionRequest: FDAccountUpdateTransactionRequest,
        /**
         * The FDAnchorTransactionRequest model constructor.
         * @property {FDAnchorTransactionRequest}
         */
        FDAnchorTransactionRequest: FDAnchorTransactionRequest,
        /**
         * The FDCancelTransactionRequest model constructor.
         * @property {FDCancelTransactionRequest}
         */
        FDCancelTransactionRequest: FDCancelTransactionRequest,
        /**
         * The FDContractDeployTransactionRequest model constructor.
         * @property {FDContractDeployTransactionRequest}
         */
        FDContractDeployTransactionRequest: FDContractDeployTransactionRequest,
        /**
         * The FDContractExecutionTransactionRequest model constructor.
         * @property {FDContractExecutionTransactionRequest}
         */
        FDContractExecutionTransactionRequest: FDContractExecutionTransactionRequest,
        /**
         * The FDProcessRLPRequest model constructor.
         * @property {FDProcessRLPRequest}
         */
        FDProcessRLPRequest: FDProcessRLPRequest,
        /**
         * The FDTransactionResult model constructor.
         * @property {FDTransactionResult}
         */
        FDTransactionResult: FDTransactionResult,
        /**
         * The FDUserAccountUpdateTransactionRequest model constructor.
         * @property {FDUserAccountUpdateTransactionRequest}
         */
        FDUserAccountUpdateTransactionRequest: FDUserAccountUpdateTransactionRequest,
        /**
         * The FDUserAnchorTransactionRequest model constructor.
         * @property {FDUserAnchorTransactionRequest}
         */
        FDUserAnchorTransactionRequest: FDUserAnchorTransactionRequest,
        /**
         * The FDUserCancelTransactionRequest model constructor.
         * @property {FDUserCancelTransactionRequest}
         */
        FDUserCancelTransactionRequest: FDUserCancelTransactionRequest,
        /**
         * The FDUserContractDeployTransactionRequest model constructor.
         * @property {FDUserContractDeployTransactionRequest}
         */
        FDUserContractDeployTransactionRequest: FDUserContractDeployTransactionRequest,
        /**
         * The FDUserContractExecutionTransactionRequest model constructor.
         * @property {FDUserContractExecutionTransactionRequest}
         */
        FDUserContractExecutionTransactionRequest: FDUserContractExecutionTransactionRequest,
        /**
         * The FDUserProcessRLPRequest model constructor.
         * @property {FDUserProcessRLPRequest}
         */
        FDUserProcessRLPRequest: FDUserProcessRLPRequest,
        /**
         * The FDUserValueTransferTransactionRequest model constructor.
         * @property {FDUserValueTransferTransactionRequest}
         */
        FDUserValueTransferTransactionRequest: FDUserValueTransferTransactionRequest,
        /**
         * The FDValueTransferTransactionRequest model constructor.
         * @property {FDValueTransferTransactionRequest}
         */
        FDValueTransferTransactionRequest: FDValueTransferTransactionRequest,
        /**
         * The Failures model constructor.
         * @property {Failures}
         */
        Failures: Failures,
        /**
         * The FeePayerSignaturesObj model constructor.
         * @property {FeePayerSignaturesObj}
         */
        FeePayerSignaturesObj: FeePayerSignaturesObj,
        /**
         * The Key model constructor.
         * @property {Key}
         */
        Key: Key,
        /**
         * The KeyCreationRequest model constructor.
         * @property {KeyCreationRequest}
         */
        KeyCreationRequest: KeyCreationRequest,
        /**
         * The KeyCreationResponse model constructor.
         * @property {KeyCreationResponse}
         */
        KeyCreationResponse: KeyCreationResponse,
        /**
         * The KeySignDataRequest model constructor.
         * @property {KeySignDataRequest}
         */
        KeySignDataRequest: KeySignDataRequest,
        /**
         * The KeySignDataResponse model constructor.
         * @property {KeySignDataResponse}
         */
        KeySignDataResponse: KeySignDataResponse,
        /**
         * The LegacyTransactionRequest model constructor.
         * @property {LegacyTransactionRequest}
         */
        LegacyTransactionRequest: LegacyTransactionRequest,
        /**
         * The MultisigAccount model constructor.
         * @property {MultisigAccount}
         */
        MultisigAccount: MultisigAccount,
        /**
         * The MultisigAccountUpdateRequest model constructor.
         * @property {MultisigAccountUpdateRequest}
         */
        MultisigAccountUpdateRequest: MultisigAccountUpdateRequest,
        /**
         * The MultisigAddress model constructor.
         * @property {MultisigAddress}
         */
        MultisigAddress: MultisigAddress,
        /**
         * The MultisigKey model constructor.
         * @property {MultisigKey}
         */
        MultisigKey: MultisigKey,
        /**
         * The MultisigTransactionStatus model constructor.
         * @property {MultisigTransactionStatus}
         */
        MultisigTransactionStatus: MultisigTransactionStatus,
        /**
         * The MultisigTransactions model constructor.
         * @property {MultisigTransactions}
         */
        MultisigTransactions: MultisigTransactions,
        /**
         * The MultisigUpdateKey model constructor.
         * @property {MultisigUpdateKey}
         */
        MultisigUpdateKey: MultisigUpdateKey,
        /**
         * The MultisigUpdateKeyType model constructor.
         * @property {MultisigUpdateKeyType}
         */
        MultisigUpdateKeyType: MultisigUpdateKeyType,
        /**
         * The PendedTransaction model constructor.
         * @property {PendedTransaction}
         */
        PendedTransaction: PendedTransaction,
        /**
         * The ProcessRLPRequest model constructor.
         * @property {ProcessRLPRequest}
         */
        ProcessRLPRequest: ProcessRLPRequest,
        /**
         * The PubkeyUpdateKeyType model constructor.
         * @property {PubkeyUpdateKeyType}
         */
        PubkeyUpdateKeyType: PubkeyUpdateKeyType,
        /**
         * The RoleBasedUpdateKeyType model constructor.
         * @property {RoleBasedUpdateKeyType}
         */
        RoleBasedUpdateKeyType: RoleBasedUpdateKeyType,
        /**
         * The SignPendingTransactionBySigRequest model constructor.
         * @property {SignPendingTransactionBySigRequest}
         */
        SignPendingTransactionBySigRequest: SignPendingTransactionBySigRequest,
        /**
         * The Signature model constructor.
         * @property {Signature}
         */
        Signature: Signature,
        /**
         * The StatusResponse model constructor.
         * @property {StatusResponse}
         */
        StatusResponse: StatusResponse,
        /**
         * The TransactionReceipt model constructor.
         * @property {TransactionReceipt}
         */
        TransactionReceipt: TransactionReceipt,
        /**
         * The TransactionResult model constructor.
         * @property {TransactionResult}
         */
        TransactionResult: TransactionResult,
        /**
         * The TxData model constructor.
         * @property {TxData}
         */
        TxData: TxData,
        /**
         * The ValueTransferTransactionRequest model constructor.
         * @property {ValueTransferTransactionRequest}
         */
        ValueTransferTransactionRequest: ValueTransferTransactionRequest,
        /**
         * The AccountApi service constructor.
         * @property {AccountApi}
         */
        AccountApi: AccountApi,
        /**
         * The BasicTransactionApi service constructor.
         * @property {BasicTransactionApi}
         */
        BasicTransactionApi: BasicTransactionApi,
        /**
         * The FeeDelegatedTransactionPaidByKASApi service constructor.
         * @property {FeeDelegatedTransactionPaidByKASApi}
         */
        FeeDelegatedTransactionPaidByKASApi: FeeDelegatedTransactionPaidByKASApi,
        /**
         * The FeeDelegatedTransactionPaidByUserApi service constructor.
         * @property {FeeDelegatedTransactionPaidByUserApi}
         */
        FeeDelegatedTransactionPaidByUserApi: FeeDelegatedTransactionPaidByUserApi,
        /**
         * The KeyApi service constructor.
         * @property {KeyApi}
         */
        KeyApi: KeyApi,
        /**
         * The MultisigTransactionManagementApi service constructor.
         * @property {MultisigTransactionManagementApi}
         */
        MultisigTransactionManagementApi: MultisigTransactionManagementApi,
        /**
         * The RegistrationApi service constructor.
         * @property {RegistrationApi}
         */
        RegistrationApi: RegistrationApi,
        /**
         * The StatisticsApi service constructor.
         * @property {StatisticsApi}
         */
        StatisticsApi: StatisticsApi,
    }

    return exports
})
