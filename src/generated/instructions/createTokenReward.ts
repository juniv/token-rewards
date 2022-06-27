/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category CreateTokenReward
 * @category generated
 */
export type CreateTokenRewardInstructionArgs = {
  rewardBasisPoints: beet.bignum
  uri: string
  name: string
  symbol: string
}
/**
 * @category Instructions
 * @category CreateTokenReward
 * @category generated
 */
export const createTokenRewardStruct = new beet.FixableBeetArgsStruct<
  CreateTokenRewardInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['rewardBasisPoints', beet.u64],
    ['uri', beet.utf8String],
    ['name', beet.utf8String],
    ['symbol', beet.utf8String],
  ],
  'CreateTokenRewardInstructionArgs'
)
/**
 * Accounts required by the _createTokenReward_ instruction
 *
 * @property [_writable_] rewardData
 * @property [_writable_] rewardMint
 * @property [_writable_, **signer**] user
 * @property [_writable_] metadata
 * @property [] tokenMetadataProgram
 * @category Instructions
 * @category CreateTokenReward
 * @category generated
 */
export type CreateTokenRewardInstructionAccounts = {
  rewardData: web3.PublicKey
  rewardMint: web3.PublicKey
  user: web3.PublicKey
  metadata: web3.PublicKey
  tokenMetadataProgram: web3.PublicKey
}

export const createTokenRewardInstructionDiscriminator = [
  248, 215, 71, 204, 10, 239, 101, 52,
]

/**
 * Creates a _CreateTokenReward_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateTokenReward
 * @category generated
 */
export function createCreateTokenRewardInstruction(
  accounts: CreateTokenRewardInstructionAccounts,
  args: CreateTokenRewardInstructionArgs
) {
  const { rewardData, rewardMint, user, metadata, tokenMetadataProgram } =
    accounts

  const [data] = createTokenRewardStruct.serialize({
    instructionDiscriminator: createTokenRewardInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: rewardData,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: rewardMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: user,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey(
      'DdV3ttvqbXm9uMW1XX5AUDkf7v9mgkQdFjNkrp4zkDyQ'
    ),
    keys,
    data,
  })
  return ix
}
