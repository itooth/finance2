/*
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package com.apitable.template.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Template Album DTO.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TemplateAlbumDto {

    /**
     * Template Album Table ID.
     */
    private Long id;

    /**
     * Template Album Custom ID.
     */
    private String albumId;

    /**
     * I18n Key Name.
     */
    private String i18nName;

    /**
     * Template Album Name.
     */
    private String name;
}
