import moment from "moment";
import {Badge, Dropdown} from "antd";
import React from "react";
import UAParser from "ua-parser-js";
import CryptoJS from "crypto-js"
import {Cipher} from "crypto";

class Helper {
    static toPage(data: any) {
        return {
            current: data.current + 1,
            total: data.total,
            pageSize: data.pageSize
        }
    }

    static toDate(timestamp: any) {
        if (!timestamp) {
            return '---';
        }
        return moment.unix(timestamp).format('YYYY-MM-DD H:mm:ss');
    }

    static comparseNow(timestamp: any) {
        if (timestamp <= new Date().getTime()) {
            return 'danger';
        }
        return 'default';
    }

    static getParentKey = (key: any, tree: any): any => {
        let parentKey;
        for (let i = 0; i < tree.length; i++) {
            const node = tree[i];
            if (node.children) {
                if (node.children.some((item: any) => item.key == key)) {
                    parentKey = node.key;
                } else if (this.getParentKey(key, node.children)) {
                    parentKey = this.getParentKey(key, node.children)
                }
            }
        }
        return parentKey;
    }

    static renTree(data: any, menu?: any) {
        if (!data || data.length <= 0) {
            return [];
        }
        return data.map((item: any, index: number) => {
                if (!item) {
                    return {};
                }
                return {
                    title: menu ? <Dropdown overlay={() => menu(item)} trigger={['contextMenu']}>
                        <span>{item.name}</span>
                    </Dropdown> : item.name,
                    key: item.id,
                    name: item.name,
                    value: item.id,
                    children: this.renTree(item.childs, menu)
                }
            }
        );
    }

    static renderStt(stt: any) {
        switch (stt) {
            case true:
            case 1:
            case 'active':
            case 'ACTIVE':
                return <Badge status="success" text="Active"/>
            case 'COMING':
                return <Badge status="processing" text="COMING"/>
            case 'OFF':
                return <Badge status="default" text="OFF"/>
            case 'INACTIVE':
                return <Badge status="default" text="INACTIVE"/>
            default:
                return <Badge status="default" text="Disabled"/>
        }
    }

    static genderAgent(agent: string) {
        const parser = new UAParser();
        parser.setUA(agent);
        const result = parser.getResult();
        return `${result.os.name}/${result.os.version} - ${result.browser.name}`
    }

//     try {
//     byte[] keyArr;
//     byte[] toEncryptArray = DatatypeConverter.parseBase64Binary(cipherString);
//
//     if (useHash) {
//         MessageDigest md5 = MessageDigest.getInstance("MD5");
//         keyArr = md5.digest(privateKey.getBytes(StandardCharsets.UTF_8));
//     } else {
//     keyArr = privateKey.getBytes(StandardCharsets.UTF_8);
// }
// Security.addProvider(new BouncyCastleProvider());
// SecretKey keySpec = new SecretKeySpec(keyArr, "DESede");
// Cipher cipher = Cipher.getInstance("DESede/ECB/PKCS7Padding", "BC");
// cipher.init(Cipher.DECRYPT_MODE, keySpec);
// byte[] resultArray = cipher.doFinal(toEncryptArray);
// return StringUtils.newStringUtf8(resultArray);
// } catch (Exception exception) {
//     throw new Exception(exception.getMessage());
// }

    static passwordDecode(password: string, useHash = true) {
        const privateKey = 'Sodaubai Security Code DCMM QuangHuyTotDong199) Asia';
        let keyHash = CryptoJS.MD5(CryptoJS.enc.Utf8.parse(privateKey));
        const rePassword = CryptoJS.enc.Hex.parse(password);
        const decrypt = CryptoJS.DES.decrypt(CryptoJS.lib.CipherParams.create({
            ciphertext: rePassword,
        }), keyHash, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        console.log("DEC", decrypt)
        return decrypt.toString(CryptoJS.enc.Utf8)
    }
}

export default Helper;
